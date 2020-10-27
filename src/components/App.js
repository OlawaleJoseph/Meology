import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/Home';
import AboutPage from '../pages/About';
import SingleMealPage from '../pages/SingleMeal';
import PageNotFound from '../pages/Error';
import Navbar from './Navbar';

export default function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/meal/:id" component={SingleMealPage} />
        <Route component={PageNotFound} />
      </Switch>
    </>
  );
}
