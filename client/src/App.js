import React from 'react';
import './assets/css/index.scss';
import Header from './components/header';
import Home from './components/home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Items from './components/items';
import ItemProduct from './components/itemProduct';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/items">
          <Items />
        </Route>
        <Route exact path="/items/:id">
          <ItemProduct />
        </Route>
      </Switch>
    </Router>
  );
}
