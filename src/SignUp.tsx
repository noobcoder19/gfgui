import Authentication, { IAuthetication } from "./Authentication";
import { useHistory } from "react-router-dom";
import firebase from "firebase";
export default function SignUp() {
        const history = useHistory();
        const onSubmit = async (signup : IAuthetication) => {
          try{
          console.log(
            "submit button invoked" 
          );
          const userData = await firebase.auth().createUserWithEmailAndPassword(signup.email, signup.password)
          await userData.user?.updateProfile({displayName: signup.userName})
          history.push("/");
          }
          catch(e) {
            throw(e)
          }
        };
        
        return (<Authentication 
        isUserNameVisible 
        title={"Welcome to the signup page"}
        height={400}
        onSubmit={onSubmit}
        tertiary={{
            label: "Login",
            onClick: () => history.push("/Login"),
          }}
        />
        );
    
}