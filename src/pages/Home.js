import React from 'react';
import ConnectedSearchForm from '../components/SearchForm';
import MealList from '../components/MealList';

const Home = () => (
  <main>
    <ConnectedSearchForm />
    <MealList />
  </main>
);

export default Home;
