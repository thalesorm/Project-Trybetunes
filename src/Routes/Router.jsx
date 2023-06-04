import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../Pages/Login';
import Search from '../Pages/Search';
import Album from '../Pages/Album';
import Favorites from '../Pages/Favorites';
import Profile from '../Pages/Profile';
import ProfileEdit from '../Pages/ProfileEdit';
import PageNotFound from '../Pages/PageNotFound';

export default class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/search" component={ Search } />
        <Route exact path="/album/:id" component={ Album } />
        <Route exact path="/favorites" component={ Favorites } />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/profile/edit" component={ ProfileEdit } />
        <Route exact path="/page/not/found" component={ PageNotFound } />
      </Switch>
    );
  }
}
