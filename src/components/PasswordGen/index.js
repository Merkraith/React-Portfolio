import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import PasswordGen from '../../images/pwgen.jpg';
import GitHubIcon from '@material-ui/icons/GitHub';
import DvrIcon from '@material-ui/icons/Dvr';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Tooltip from '@material-ui/core/Tooltip';


const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
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
      fontSize: theme.typography.pxToRem(21),
      fontWeight: theme.typography.fontWeightRegular,
      color: "lightblue",
    },
    text: {
      marginLeft: 20,
      marginRight: 20,
      color: "lightblue",
    },
    text2: {
      color: "lightblue",
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    bg: {
      backgroundColor: '#333333',
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
          <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h3" component="h3" className={classes.text2}>
                Password Generator
                </Typography>
            </CardContent>
            <CardMedia
              className={classes.cardMedia}
              image={PasswordGen}
              title="PW Gen"
            />
            <div className={classes.root}>
              <Accordion className={classes.bg}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className={classes.text2}/>}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>Description</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className={classes.text2}>
                        A simple app that helps generate a random password for the user. The user can set the desired length of your password ,
                        then choose yes or no on if you want UPPERCASE characters, lowercase characters, numb3rs, or Symbols.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className={classes.root}>
              <Accordion className={classes.bg}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className={classes.text2}/>}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>Technologies</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className={classes.text2}>
                    HTML, CSS, Javascript.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <Grid item xs={12} sm container className={classes.cardGrid}>
              <Grid container spacing={spacing} justify="center">
              <Tooltip title="GitHub" aria-label="GitHub">
                <Link href="https://github.com/Merkraith/The-Amazing-Password-Generator"> <GitHubIcon  className={classes.text} fontSize="large" /></Link>
                </Tooltip>
                <Tooltip title="Deployed Link" aria-label="Deployed Link">
                <Link href="https://merkraith.github.io/The-Amazing-Password-Generator/"> <DvrIcon  className={classes.text} fontSize="large" /></Link>
                </Tooltip>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }