import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loading from './Loading';
import setLoadingStatus from '../redux/actions/loadingAction';
import { loadMeals } from '../redux/actions/mealsAction';

const MealList = ({
  Meals, Loading, SearchTerm, setLoadingStatus, loadMeals,
}) => {
  useEffect(() => {
    setLoadingStatus(true);
    loadMeals(SearchTerm);
    setLoadingStatus(false);
  }, [loadMeals, SearchTerm, setLoadingStatus]);

    <section className="section">
      <h2 className="section-title">Meals</h2>
    </section>;
};

MealList.propTypes = {
  SearchTerm: PropTypes.string.isRequired,
  Meals: PropTypes.arrayOf(PropTypes.object).isRequired,
  Loading: PropTypes.bool.isRequired,
  setLoadingStatus: PropTypes.func.isRequired,
  loadMeals: PropTypes.func.isRequired,
};
const mapStateToProps = ({ SearchTerm, Meals, Loading }) => ({ SearchTerm, Meals, Loading });

const mapDispatchToProps = { setLoadingStatus, loadMeals };

export default connect(mapStateToProps, mapDispatchToProps)(MealList);
