import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Collaborations from './Pages/Collaborations';
import Projects from './Pages/Projects';

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
            <Route path='/Pages/About' component={About} />
            <Route path='/Pages/Collaborations' component={Collaborations} />
            <Route path='/Pages/Projects' component={Projects} />
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
