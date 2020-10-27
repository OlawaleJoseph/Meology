import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoadingBar from './Loading';
import setLoadingStatus from '../redux/actions/loadingAction';
import { loadMeals } from '../redux/actions/mealsAction';
import Meal from './Meal';

const MealList = ({
  Meals,
  Loading,
  SearchTerm,
  setLoadingStatus,
  loadMeals,
}) => {
  useEffect(() => {
    setLoadingStatus(true);
    loadMeals(SearchTerm);
    setLoadingStatus(false);
  }, [loadMeals, SearchTerm, setLoadingStatus]);

  if (Loading) return <LoadingBar />;

  if (Meals.length < 1) {
    return (
      <h2 className="section-title">no meals matched your search criteria</h2>
    );
  }

  return (
    <section className="section">
      <h2 className="section-title">Meals</h2>
      <div className="meals-center">
        {Meals.map(meal => (
          <Meal
            key={meal.id}
            image={meal.image}
            name={meal.name}
            id={meal.id}
            info={meal.info}
            area={meal.area}
          />
        ))}
      </div>
    </section>
  );
};

MealList.propTypes = {
  SearchTerm: PropTypes.string.isRequired,
  Meals: PropTypes.arrayOf(PropTypes.object).isRequired,
  Loading: PropTypes.bool.isRequired,
  setLoadingStatus: PropTypes.func.isRequired,
  loadMeals: PropTypes.func.isRequired,
};
const mapStateToProps = ({ SearchTerm, Meals, Loading }) => ({
  SearchTerm,
  Meals,
  Loading,
});

const mapDispatchToProps = { setLoadingStatus, loadMeals };

export default connect(mapStateToProps, mapDispatchToProps)(MealList);
