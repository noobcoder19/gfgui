import {
  makeStyles,
  TextField,
  Theme,
  Typography
} from "@material-ui/core";
// import { data } from "cypress/types/jquery";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import FormButtons, { IButtonItem } from "./FormButtons";
import LoadingSpinner from "./LoadingSpinner";



const useStyles = makeStyles<Theme, IProps>({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: (props) => (props.height-60)+"px",
  },

  outerDiv: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    height: "100%",
  },

  innerDiv: {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: (props) => (props.height)+"px",
  },

  title: {
    textAlign: "center",
  },

  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  buttonItem: {
    margin: "0 10px",
  },
  errormessage: {
    color: 'red',
  },
});

export interface IAuthetication {
  userName: string;
  email: string;
  password: string;
}

interface IProps {
  isUserNameVisible: boolean;
  title: string;
  height: number;  
  tertiary: IButtonItem;
  onSubmit: (data: IAuthetication) => void;
}

export default function Authentication(props: IProps) {
  const styles = useStyles(props);
  
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuthetication>();
  const history = useHistory();
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const onSubmit = async (data: IAuthetication) => {
    try{
    setLoading(true);
    await props.onSubmit(data);
    setLoading(false);
  } catch(e: any){
    setLoading(false);
    setErrorMessage(e.message);
  }
};
  return (
    <div className={styles.outerDiv}>
      <div className={styles.innerDiv}>
        <Typography variant="h3" className={styles.title}>
          {props.title}
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
          {props.isUserNameVisible && (
            <TextField
              {...register("userName", {
                required: true,
                minLength: { value: 4, message: "4 is min length" },
              })}
              variant="outlined"
              label="User name"
              placeholder="User name"
              required={true}
              error={errors && errors.userName?.message ? true : false}
              helperText={errors.userName?.message}
            />
          )}
          <TextField
            type="email"
            {...register("email", {
              required: true,
              minLength: { value: 4, message: "4 is min length" },
              pattern: {
                value: /\w+@\w+\.\w+/,
                message: "email regex not matched",
              },
            })}
            variant="outlined"
            label="Email address"
            placeholder="Email address"
            required={true}
            error={errors && errors.email?.message ? true : false}
            helperText={errors.email?.message}
          />
          <TextField
            type="password"
            {...register("password", {
              required: true,
              minLength: { value: 6, message: "min length is 6" },
            })}
            variant="outlined"
            label="Password"
            placeholder="Password"
            error={errors && errors.password?.message ? true : false}
            required={true}
            helperText={errors.password?.message}
          />
          <FormButtons
            primary={{
              label: "Submit",
              onClick: () => console.log("submit"),
            }}
            secondary={{
              label: "Reset",
              onClick: () => reset(),
            }}
            tertiary={props.tertiary}
          />
          {errorMessage && <Typography variant="h4" className={styles.errormessage}> {errorMessage}</Typography>}
        </form>
        {isLoading && <LoadingSpinner />}
      </div>
    </div>
  );
}
