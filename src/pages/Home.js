import React from 'react';
import ConnectedSearchForm from '../components/SearchForm';
import ConnectedMealList from '../components/MealList';

const Home = () => (
  <main>
    <ConnectedSearchForm />
    <ConnectedMealList />
  </main>
);

export default Home;
