import React from 'react';

const MealList = () => (
  <section className="section">
    <h2 className="section-title">Meals</h2>
  </section>
);

const mapStateToProps = ({ SearchTerm, Meals, Loading }) => ({ SearchTerm, Meals, Loading });
export default MealList;
