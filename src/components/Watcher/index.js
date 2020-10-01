import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Watcher from '../../images/watcher.jpg';
import GitHubIcon from '@material-ui/icons/GitHub';
import DvrIcon from '@material-ui/icons/Dvr';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    margin: 10,
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  text: {
    marginLeft: 20,
    marginRight: 20,
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  bg: {
    backgroundColor: 'lightblue',
  }
}));

export default function ImgMediaCard() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  return (

    <div>

      <CssBaseline />
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid align="center" xs={12} sm={4} md={8} >
          <CardMedia
            className={classes.cardMedia}
            image={Watcher}
            title="Watcher"
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h3" component="h3">
              Watcher
            </Typography>
          </CardContent>
          <div className={classes.root}>
            <Accordion className={classes.bg}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>Description</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                "Watcher" is a neighborhood watch application.
                Users can assign themselves a username and post a message into the feed, then the map dynamically posts
                the message at their location at that time. My collaboratorvrole was Front-End/CSS.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className={classes.root}>
            <Accordion className={classes.bg}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>Technologies</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  HTML, CSS, Materialize-Css, Javascript, JQuery, Node Express, Sequelize, Handlebars, MomentJS, TomTom API
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <Grid item xs={12} sm container className={classes.cardGrid}>
            <Grid container spacing={spacing} justify="center">
              <Link href="https://github.com/nobobobo/watcher"> <GitHubIcon style={{ color: "#212121" }} className={classes.text} fontSize="large" /></Link>
              <Link href="https://quiet-shelf-40896.herokuapp.com/"> <DvrIcon style={{ color: "#212121" }} className={classes.text} fontSize="large" /></Link>
            </Grid>
          </Grid>
          {/* </Card> */}
        </Grid>
      </Container>
    </div>
  );
}