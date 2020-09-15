import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import WorkdayPlanner from '../../images/workdayplanner.jpg';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
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
          alt="Workday Planner"
          height="140"
          image={WorkdayPlanner}
          title="Workday Planner"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Workday Planner
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          An application that lets the users keep memos for each hour of the workday and be organized with daily work tasks.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Deployed Link
        </Button>
      </CardActions>
    </Card>
  );
}