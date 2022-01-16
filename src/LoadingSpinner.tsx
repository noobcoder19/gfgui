import { CircularProgress, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles<Theme, {}>({
    container: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default function LoadingSpinner() {
    const style = useStyles();
    return (
        <div className={style.container}>
        <CircularProgress size={100} /> 
        </div>
    );
    
}