import { AppBar, Button, Container, Grid, InputBase, Theme, Toolbar, Typography } from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "./AppState";
import HotelCard from "./HotelCard";
import { completed, started, IHotel } from "./HotelsSlice";
import SearchIcon from "@material-ui/icons/Search"
import { makeStyles } from "@material-ui/styles";
import { useHistory } from "react-router-dom";
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
    useEffect(()=>{

        async function api() {
            const response = await fetch("/hotel.json");
            const json = await response.json();
            dispatch(completed(json.map(x => x.restaurant)));
            
        }

        dispatch(started());
        api();

    },[]);

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
                    {context?.uid && (<Button className={styles.button} onClick={() => history.push("/Profile")}>PROFILE</Button>)}
                    {!context?.uid && (<Button className={styles.button} onClick={() => history.push("/SignUp")}>SIGN UP</Button>)}
                    {!context?.uid && (<Button className={styles.button} onClick={() => history.push("/Login")}>LOGIN</Button>)}
                       
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