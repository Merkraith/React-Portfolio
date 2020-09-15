import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FFQuiz from '../../images/ffquiz.jpg';
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
      <CardActionArea>
        <CardMedia
          component="img"
          alt="FFQuiz"
          height="140"
          image={FFQuiz}
          title="FFQuiz"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Final Fantasy Quiz
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          This is a fun quiz, written in javascript with a classic Final Fantasy theme. It is a timed quiz
              and each wrong question deducts time. Remaining time left results in your score.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="small" color="primary">
          <Link href="https://github.com/Merkraith/Final-Fantasy-Quiz"> <GitHubIcon style={{ color: "#212121" }} className={classes.text} fontSize="large" /></Link>
        </Button>
        <Button size="small" color="primary">
          <Link href="https://merkraith.github.io/Final-Fantasy-Quiz/"> <DvrIcon style={{ color: "#212121" }} className={classes.text} fontSize="large" /></Link>
        </Button>
      </CardActions>
    </Card>
  );
}