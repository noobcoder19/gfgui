import { AppBar, Button, Container, Grid, InputBase, Theme } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/styles";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { AppState } from "./AppState";
import HotelCard from "./HotelCard";
import { completed, IHotel, started } from "./HotelsSlice";
import { userContext } from "./UserProvider";


const useStyles = makeStyles<Theme, {}>({
    rootContainer: {
        display: 'flex',
        alignItems: 'center',
        margin: '10px 0',
    },
    searchContainer: {
        height: '80%',
        flexGrow: 0.9,
        display: 'flex',
        backgroundColor: 'rgba(255,255,255,0.15)'
    },
    iconContainer: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 15px',
    },
    textBox: {
        color: 'white'
    },
    buttons: {
        display: 'flex',
        flexGrow: 0.1,
        justifyContent: 'space-evenly'
    },
    grid: {
        padding: '30px',
    }
});


export default function HotelsUI() {
    const [searchString, setSearchString] = useState("");
    const styles = useStyles();
    const context = useContext(userContext);
    const dispatch = useDispatch();
    const history = useHistory();
    const hotels: IHotel[] = useSelector((x:AppState) => x.HotelsSlice);
    useEffect(() => {
        async function api() {
          
          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          
          var graphql = JSON.stringify({
            query: "{\n  hotels {\n    id, name, cuisines, featured_image\n  }\n}",
            variables: {}
          })
          var requestOptions: RequestInit = {
            method: 'POST',
            headers: myHeaders,
            body: graphql,
            redirect: 'follow'
          };
          
          const response = await fetch(" https://sleepy-temple-86502.herokuapp.com/graphql", requestOptions);
          const json: {data:{hotels: IHotel[]}} = await response.json();
          dispatch(completed(json.data.hotels));
        }
        dispatch(started());
        api();
      }, []);
    

    return (
        <>
        <AppBar position="static">
            <Container maxWidth="xl" className={styles.rootContainer}>
                <div className={styles.searchContainer}>
                    <div className={styles.iconContainer}>
                <SearchIcon />
                 </div>


                <InputBase
                    fullWidth
                    
                    className={styles.textBox}
                    placeholder="Search..."
                    inputProps={{ 'aria-label' : 'search'}}
                    onChange={e => setSearchString(e.target.value)}
                    />
               </div>

               

                <div className={styles.button}>
                    {context?.uid && (<Button className={styles.button} onClick={() => history.push("/Profile")} id="profileButton">PROFILE</Button>)}
                    {!context?.uid && (<Button className={styles.button} onClick={() => history.push("/SignUp")}id="signupButton">SIGN UP</Button>)}
                    {!context?.uid && (<Button className={styles.button} onClick={() => history.push("/Login")}id="loginButton">LOGIN</Button>)}
                       
                    </div>
                
            </Container>
        </AppBar>
        <Grid container spacing={4}
        justifyContent="space-evenly"
        alignItems="center">
            {hotels.filter(x=> x.name.toLowerCase().includes(searchString.toLowerCase())).map((hotel) => (
                 <Grid item xs={4} className={styles.grid}>
                    <HotelCard {...hotel} />
                  </Grid>
            ))}
        </Grid>
        </>
    );

    
}