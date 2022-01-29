import { useHistory } from "react-router-dom";
import { Fab, makeStyles, Theme } from "@material-ui/core";

const useStyles= makeStyles<Theme, {}>({
    buttons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    buttonItem: {
        margin: "0 10px",
    },

});

export interface IButtonItem {
    label: string;
    onClick: () => void; 
}

interface IProps  {
    primary: IButtonItem;
    secondary?: IButtonItem;
    tertiary?: IButtonItem;
}

export default function FormButtons(props: IProps) {
    const style=useStyles()
    const history = useHistory();
    return (
    <div className={style.buttons}>
    {props.primary && (
    <Fab 
    type="submit" 
    variant="extended" 
    color="primary" 
    onClick={props.primary.onClick}
    id="primaryButton"
    className={style.buttonItem}>
        {props.primary.label}
        </Fab>
    )}
    {props.secondary && (<Fab 
    onClick={props.secondary.onClick}
    variant="extended" 
    color="secondary" 
    className={style.buttonItem}
    id="secondaryButton">
        {props.secondary.label}
        </Fab>
    )}
    {props.tertiary && (<Fab 
    onClick={props.tertiary.onClick}
    variant="extended" 
    className={style.buttonItem}
    id="tertiaryButton">
        {props.tertiary.label}
        </Fab>
    )}
    <Fab onClick={() => history.push("/HotelsUI")} variant="extended" className={style.buttonItem} id="homeButton">Home</Fab>
    </div>
    );
}