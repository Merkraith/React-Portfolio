import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import About from './Pages/About';
import GroupProjects from './Pages/GroupProjects';
import Projects from './Pages/Projects';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Bootstrap from './images/bootstrap.png';
import Heroku from './images/heroku.png';
import Htmlcssjs from './images/htmlcssjs.png';
import Jquery from './images/jquery.png';
import Materialize from './images/materialize.png';
import MaterialUI from './images/materialui.png';
import Mysql from './images/mysql.png';
import Node from './images/node.png';
import Reactlogo from './images/react.png';
import Wrapper from "./components/Wrapper";







import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bgcolor: {
    color: "darkgreen",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "white",
  },
  text: {
    color: 'white',
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  bg: {
    backgroundColor: '#212121',
    color: 'white',
  },
  bg2: {
    backgroundColor: '#364150',
    color: 'white',

  },
  img: {
    maxWidth: '100px',
    width: '100%',
    flexDirection: 'column',
    margin: 5,

  },
  } 
));


function App() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  return (


    <Router>
      <div className={classes.bg}>
        <div className={classes.root} >
          <AppBar className={classes.bg2} position="fixed" justifyContent="center">
            <div style={{ width: '100%' }}>
              <Box display="flex" justifyContent="center" m={1} p={1} >
                <Box>
                  <Typography
                    align="center"
                    component="h1"
                    variant="h2"
                    color="textPrimary"
                    noWrap
                    className={classes.title}
                  >
                    Portfolio
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" justifyContent="center" m={1} p={1} >
                <Box>
                  <Grid item xs={12} sm container>
                    <Grid container spacing={spacing} justify="center">
                      <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                        <Button>
                          <Link className={classes.text} to={'/Pages/About'}>About</Link>
                        </Button>
                        <Button>
                          <Link className={classes.text} to={'/Pages/GroupProjects'}>Group Projects</Link>
                        </Button>
                        <Button>
                          <Link className={classes.text} to={'/Pages/Projects'}>Projects</Link>
                        </Button>
                      </ButtonGroup>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </div>
          </AppBar>
        </div>
        <div>
          <div>
            <Switch>
              <Route exact path='/Pages/About' component={About} />
              <Route path='/Pages/GroupProjects' component={GroupProjects} />
              <Route path='/Pages/Projects' component={Projects} />
            </Switch>
          </div>
        </div>
        <div>
        <div className={classes.appBarSpacer} />
          <footer className={classes.bg}>
          <Typography
                align="center"
                component="h1"
                variant="h2"
                color="white"
            >Technologies
            </Typography>
            <Wrapper>
              <img className={classes.img} height="auto" alt="htmlcssjs" src={Htmlcssjs} />
              <img className={classes.img} height="auto" alt="jquery" src={Jquery} />
              <img className={classes.img} height="auto" alt="bootstrap" src={Bootstrap} />
              <img className={classes.img} height="auto" alt="node" src={Node} />
              <img className={classes.img} height="auto" alt="heroku" src={Heroku} />
              <img className={classes.img} height="auto" alt="mysql" src={Mysql} />
              <img className={classes.img} height="auto" alt="materialize" src={Materialize} />
              <img className={classes.img} height="auto" alt="react" src={Reactlogo} />
              <img className={classes.img} height="auto" alt="materialui" src={MaterialUI} />
            </Wrapper>
          </footer>
        </div>
      </div>
    </Router >
  );
}
export default App;
