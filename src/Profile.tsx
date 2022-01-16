import { makeStyles, Theme, Typography } from "@material-ui/core"
import firebase from "firebase";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import FormButtons from "./FormButtons";
import { userContext } from "./UserProvider";
const useStyles = makeStyles<Theme, {}>({
    container: {
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column"
    },
    innerDiv: {
      height: "40%",
      display: "flex",
      textAlign: "center",
      flexDirection: "column",
      justifyContent: "space-evenly"
    },
})

export default function Profile(){
    const styles = useStyles();
    const history = useHistory();
    const context = useContext(userContext);
    const signOut = async () => {
        await firebase.auth().signOut();
        history.push("/");
    }
    return(
        <div className={styles.container}>
          <div className={styles.innerDiv}>
        <Typography variant="h3">
          {"Welcome to the profile page!!!!!!!!"}
        </Typography>
        {context?.email && (
           <Typography variant="h3">
           {context?.email}
         </Typography> 
        ) }
         {context?.displayName && (
           <Typography variant="h3">
           {context?.displayName}
         </Typography> 
        ) }
        {context?.uid && (
           <Typography variant="h3">
           {context?.uid}
         </Typography> 
        ) }
       
        <FormButtons
        primary={{
            label: "Sign Out",
            onClick: signOut
        }}
        />
        </div>
        </div>
    );
}