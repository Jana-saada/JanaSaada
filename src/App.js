import React, { Component } from 'react';
import './App.css';
//import { BrowserRouter, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import NavBar from './Component/NavBar';
import  Video from './Component/Background';
import Projects from './Component/Projects';
import About from './Component/About';
import Skills from './Component/Skills';
import Contacts from './Component/Contacts';

const Main=()=>{
  return (
    <div>
    <Video/>
   <NavBar/>
     
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
    
      <Router>
      <Route exact path="/" component={Main}/>
       <Route exact path="/About" exact component={About} />
       <Route path="/Projects" exact component={Projects} />
       <Route path="/Contacts" exact component={Contacts} />
       <Route path="/Skills" exact component={Skills} />
     
      </Router>
      </div>
    );
  }
}

export default App;
