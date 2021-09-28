import React from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import Contact from './pages/contactme';
import BMICul from './pages/BMICul';
import notesApp from './pages/notesApp';
import KeeperApp from './pages/KeeperApp';


function App() {
  return (
   <Router>
   <Switch>
   <Route path="/" component={Home} exact />
   <Route path="/contactme" component={Contact} exact />
   <Route path="/BMICul" component={BMICul} exact />
   <Route path="/notesApp" component={notesApp} exact />
   <Route path="/KeeperApp" component={KeeperApp} exact />
   </Switch>
   </Router>
  );
}

export default App;
