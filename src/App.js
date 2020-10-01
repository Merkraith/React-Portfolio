import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Collaborations from './Pages/Collaborations';
import Projects from './Pages/Projects';


// import Bootstrap from './images/bootstrap.png';
// import Heroku from './images/heroku.png';
// import Htmlcssjs from './images/htmlcssjs.png';
// import Jquery from './images/jquery.png';
// import Materialize from './images/materialize.png';
// import MaterialUI from './images/materialui.png';
// import Mysql from './images/mysql.png';
// import Node from './images/node.png';
// import Reactlogo from './images/react.png';
// import Wrapper from "./components/Wrapper";

import {
  BrowserRouter as Router,
  Switch,
  Route,
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
    backgroundColor: '#333333',
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  bg: {
    backgroundColor: '#212121',
    color: 'white',
  },
  bg2: {
    backgroundColor: '#364150',
    color: 'white',
    padding: theme.spacing(2),

  },
  img: {
    maxWidth: '100px',
    maxHeight: '100px',
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
        <Navbar />
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Pages/About' component={About} />
            <Route exact path='/Pages/Collaborations' component={Collaborations} />
            <Route exact path='/Pages/Projects' component={Projects} />
          </Switch>
        </div>
        <div>
          <div className={classes.appBarSpacer} />
          <footer className={classes.footer}>
            <span>Mark Heil's React Portfolio &copy; 2020 </span>
          </footer>
        </div>
      </div>
    </Router >
  );
}
export default App;


{/* <Typography
                align="center"
                component="h1"
                variant="h2"
                color="white"
            >Technologies
            </Typography>
            <Wrapper>
              <img className={classes.img} alt="htmlcssjs" src={Htmlcssjs} />
              <img className={classes.img} alt="jquery" src={Jquery} />
              <img className={classes.img} alt="bootstrap" src={Bootstrap} />
              <img className={classes.img} alt="node" src={Node} />
              <img className={classes.img} alt="heroku" src={Heroku} />
              <img className={classes.img} alt="mysql" src={Mysql} />
              <img className={classes.img} alt="materialize" src={Materialize} />
              <img className={classes.img} alt="react" src={Reactlogo} />
              <img className={classes.img} alt="materialui" src={MaterialUI} />
            </Wrapper> */}