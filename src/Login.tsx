import { useHistory } from "react-router-dom";
import Authentication, { IAuthetication } from "./Authentication";
import firebase from "firebase";



export default function Login() {
    const history = useHistory();
    const onSubmit = async (login: IAuthetication) => {
      try{
        
        await firebase.auth().signInWithEmailAndPassword(login.email, login.password);
        
     
      }
      catch(e){
          throw e;
      }
      };
        return (<Authentication 
        isUserNameVisible = {false}
        title={"Welcome to the login page"}
        height={300}
        onSubmit={onSubmit}
        tertiary={{
            label: "Sign Up",
            onClick: () => history.push("/SignUp"),
          }}
        />
        );
}