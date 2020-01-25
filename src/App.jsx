import React, { Component } from 'react';
import { BrowserRouter as Rout, Route, Switch } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/jquery/dist/jquery';

//Components Layout
import Header from './Components/Layout/Header'
import Footer from './Components/Layout/Footer'
//Components
import Home from './Components/Home/Home'
import RedditAPI from './Components/RedditAPI/RedditAPI'

export class App extends Component {
  render() {
    return (
      <Rout>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/reddit' component={RedditAPI} />
        </Switch>
        <Footer />
      </Rout>
    )
  }
}

export default App
