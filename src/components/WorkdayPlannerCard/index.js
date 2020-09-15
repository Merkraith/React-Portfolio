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
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import DvrIcon from '@material-ui/icons/Dvr';
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

      <CardActions>
        <Button size="small" color="primary">
          <Link href="https://github.com/Merkraith/Work-Day-Planner"> <GitHubIcon style={{ color: "#212121" }} className={classes.text} fontSize="large" /></Link>
        </Button>
        <Button size="small" color="primary">
          <Link href="https://merkraith.github.io/Work-Day-Planner/"> <DvrIcon style={{ color: "#212121" }} className={classes.text} fontSize="large" /></Link>
        </Button>
      </CardActions>
    </Card>
  );
}