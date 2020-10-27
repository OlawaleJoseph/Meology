import React from 'react';
import { connect } from 'react-redux';
import setLoadingStatus from '../redux/actions/loadingAction';
import { loadMeals } from '../redux/actions/mealsAction';

const SingleMeal = () => (
  <div />
);

const mapStateToProps = ({ meal, loading }) => ({ meal, loading });

const mapDispatchToProps = { setLoadingStatus, loadMeals };

export default connect(mapStateToProps, mapDispatchToProps)(SingleMeal);
