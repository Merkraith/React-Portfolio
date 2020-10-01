import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import WeatherDashboard from '../../images/weather.jpg';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import DvrIcon from '@material-ui/icons/Dvr';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    margin: 20,
    paddingTop: 20,
    },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    margin: 10,

},
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Weather DB"
          height="140"
          image={WeatherDashboard}
          title="Weather DB"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Weather Dashboard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          A desktop application for web browsers, that allows the user to search a city, then get current weather and a 5-day forecast.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="small" color="primary">
          <Link href="https://github.com/Merkraith/Weather-Dashboard"> <GitHubIcon style={{ color: "#212121" }} className={classes.text} fontSize="large" /></Link>
        </Button>
        <Button size="small" color="primary">
          <Link href="https://merkraith.github.io/Weather-Dashboard/"> <DvrIcon style={{ color: "#212121" }} className={classes.text} fontSize="large" /></Link>
        </Button>
      </CardActions>
    </Card>
  );
}