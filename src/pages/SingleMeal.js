import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';
import LoadingBar from '../components/Loading';
import setLoadingStatus from '../redux/actions/loadingAction';
import { loadMeal, loadMealSuccess } from '../redux/actions/mealAction';

const SingleMeal = ({
  Meal, Loading, setLoadingStatus, loadMeal, loadMealSuccess
}) => {
  const { id } = useParams();

  React.useEffect(() => {
    loadMealSuccess({});
    setLoadingStatus(true);
    loadMeal(id);
    setLoadingStatus(false);
  }, [id]);

  if (Loading
    || (Object.keys(Meal).length === 0 && Meal.constructor === Object)) return <LoadingBar />;

  if (!Meal) return <h2 className="section-title">no meal to display</h2>;

  const {
    name,
    image,
    category,
    info,
    instructions,
    ingredients,
  } = Meal;
  return (
    <section className="section meal-section">
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={image} alt={name} />
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span>
            {' '}
            {name}
          </p>
          <p>
            <span className="drink-data">category :</span>
            {' '}
            {category}
          </p>
          <p>
            <span className="drink-data">info :</span>
            {' '}
            {info}
          </p>
          <p>
            <span className="drink-data">instructons :</span>
            {' '}
            {instructions}
          </p>
          <p>
            <span className="drink-data">ingredients :</span>
            {ingredients.map(item => (item ? (
              <span key={item}>
                {' '}
                {item}
              </span>
            ) : null))}
          </p>
        </div>
      </div>
    </section>
  );
};

SingleMeal.defaultProps = {
  Meal: null,
};

SingleMeal.propTypes = {
  Meal: PropTypes.object || null,
  Loading: PropTypes.bool.isRequired,
  setLoadingStatus: PropTypes.func.isRequired,
  loadMeal: PropTypes.func.isRequired,
};

const mapStateToProps = ({ Meal, Loading }) => ({ Meal, Loading });

const mapDispatchToProps = { setLoadingStatus, loadMeal, loadMealSuccess };

export default connect(mapStateToProps, mapDispatchToProps)(SingleMeal);
