import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Recipe.css';

class Recipe extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    instructions: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired
  }
  
  render() {
    const {title, img, instructions, id, onDelete} = this.props;
    const ingredients = this.props.ingredients.map((ing, index) => (
      <li key={index}>{ing}</li> 
    ));
    return (
      <div className="cards">
        <div className="card">
          <div className="card__image-holder">
            <img className="card__image" src={img} alt={title} />
          </div>
          <div className="card-title">
            <a href="#" className="toggle-info btn">
              <span className="left"></span>
              <span className="right"></span>
            </a>
            <h2>
                {title}
            </h2>
          </div>
          <div className="card-flap flap1">
            <div className="card-description">
              <span>Ingredients:</span>
                <ul>
                  {ingredients}
                </ul>
              <span>Instructions:</span>
              <p>{instructions}</p>
            </div>
            <div className="card-flap flap2">
              <div className="card-actions">
                <a className="btn red darken-4" id="btn" type="button" onClick={() => onDelete(id)}>DELETE</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Recipe;