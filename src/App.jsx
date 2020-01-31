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
import PrivatbankAPI from './Components/PrivatbankAPI/PrivatbankAPI'
import StarWars from './Components/StarWarsAPI/StarWars'
import OnePageFilms from './Components/StarWarsAPI/Films/OnePageFilms'
import StarNuws from './Components/StarNuwsAPI/StarNuws'
import Weather from './Components/WeatherAPI/Weather'

export class App extends Component {
  render() {
    return (
      <Rout>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/reddit' component={RedditAPI} />
          <Route exact path='/privat' component={PrivatbankAPI} />
          <Route exact path='/starwars' component={StarWars} />
          <Route exact path='/starwars/films/:id' component={OnePageFilms} />
          <Route exact path='/starnuws' component={StarNuws} />
          <Route exact path='/weather' component={Weather} />
        </Switch>
        <Footer />
      </Rout>
    )
  }
}

export default App
