import { AppBar, Button, Card, CardContent, CardMedia, CircularProgress, Fab, makeStyles, styled, TextField,Typography } from "@material-ui/core";
import "./App.css"
import SearchIcon from "@material-ui/icons/Search"

const useStyles = makeStyles({
    root: {
      color: 'blue',
 //       color: (props) => props.color,
    },
  });
export default function MaterialUI() {
    const style = useStyles();

    return (
    <>
    <CircularProgress />
    <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        error={true}
        helperText="Incorrect entry."
        />

    <Typography variant="h4"
        gutterBottom component="div" 
        className={style.root}>
        h4. Heading
      </Typography>

      <Button variant="contained" color="primary">Contained</Button>
      <Fab variant="extended">Navigate</Fab>


      <Card>
        
            <CardMedia component="img" height="194" image="https://b.zmtcdn.com/data/pictures/2/308322/cf86dbd8b8ca4d40682c7713f112cc07_featured_v2.jpg"></CardMedia>
            <CardContent>
                <Typography variant="body2" color="primary">

                    Haldirams
                </Typography>
            </CardContent>
      
      </Card>

      <AppBar position="static">
          <SearchIcon />

          <input type="text"
          placeholder="Search.."
          />
      </AppBar>

    </>
    );
}