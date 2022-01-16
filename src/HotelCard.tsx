import { Card, CardContent, CardMedia, makeStyles, Theme, Typography } from "@material-ui/core";
import { IHotel } from "./HotelsSlice";


const useStyles = makeStyles<Theme, {}>({
    container: {
      height: "300px",
    },
});
export default function HotelCard(props: IHotel) {
    const style=useStyles()
    return (
        <Card className={style.container}>
            <CardMedia
            component="img"
            image={props.featured_image}
            alt={props.name}
            height={200}
        />
        <CardContent>
            <Typography variant="h5">{props.name}</Typography>
            <Typography variant="body2">{props.cuisines}</Typography>
        </CardContent>
        </Card>
    );
}