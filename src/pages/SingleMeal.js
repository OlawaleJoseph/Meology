import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom'
import setLoadingStatus from '../redux/actions/loadingAction';
import { loadMeals } from '../redux/actions/mealsAction';

const SingleMeal = ({
  Meal, Loading, setLoadingStatus, loadMeals,
}) => (
  <div />
);
SingleMeal.defaultProps = {
  Meal: null,
};

SingleMeal.propTypes = {
  Meal: PropTypes.object || null,
  Loading: PropTypes.bool.isRequired,
  setLoadingStatus: PropTypes.func.isRequired,
  loadMeals: PropTypes.func.isRequired,
};

const mapStateToProps = ({ Meal, Loading }) => ({ Meal, Loading });

const mapDispatchToProps = { setLoadingStatus, loadMeals };

export default connect(mapStateToProps, mapDispatchToProps)(SingleMeal);
