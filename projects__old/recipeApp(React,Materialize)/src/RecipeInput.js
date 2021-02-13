import React, {Component} from 'react';
import './RecipeInput.css';

class RecipeInput extends Component {
  static defaultProps = {
    onClose() {},
    onSave() {}
  }
  
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      instructions: "",
      ingredients: [''],
      img: ''
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleNewIngredient = this.handleNewIngredient.bind(this);
    this.handleChangeIng = this.handleChangeIng.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }
  
  handleNewIngredient(e) {
    const {ingredients} = this.state;
    this.setState({ingredients: [...ingredients, '']});
  }
  
  handleChangeIng(e) {
    const index = Number(e.target.name.split('-')[1]);
    const ingredients = this.state.ingredients.map((ing, i) => (
      i === index ? e.target.value : ing
    ));
    this.setState({ingredients});
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.onSave({...this.state});
    this.setState({
      title: '',
      instructions: '',
      ingredients: [''],
      img: ''
    })
  }
  
  render() {
    const {title, instructions, img, ingredients} = this.state;
    const {onClose} = this.props;
    let inputs = ingredients.map((ing, i) => (
      <div class="input-field col s6">
        <div
          className="recipe-form-line"
          key={`ingredient-${i}`}
        >
          <label className="prefix"><h5>{i+1}.</h5></label>
            <input
              type="text"
              name={`ingredient-${i}`}
              value={ing}
              size={40}
              autoComplete="off"
              placeholder=" Ingredient"
              maxlength="46"
              onChange={this.handleChangeIng}
              className="validate" />
        </div>
      </div>
    ));
    
    return (
      <div className="recipe-form-container">
        <form className='recipe-form' onSubmit={this.handleSubmit}>
          <button
            type="button"
            className="waves-effect waves-teal btn-flat btnPosLeft"
            onClick={onClose}
          >
            <i class="fas fa-times"></i>
          </button>
            <div className="input-field col s6">
              <label htmlFor='recipe-title-input'>Title</label>
              <input
                id='recipe-title-input'
                key='title'
                name='title'
                type='text'
                value={title}
                size={46}
                maxlength="20"
                autoComplete="off"
                onChange={this.handleChange}
                className="validate"/>
            </div>
          
          <div className="input-field col s6">
            <label
              htmlFor='recipe-instructions-input'
              style={{marginTop: '5px'}}
            >
              Instructions
            </label>
            <textarea
              key='instructions'
              id='recipe-instructions-input'
              type='Instructions'
              name='instructions'
              rows='8'
              cols='50'
              size={46}
              autoComplete='off'
              value={instructions}
              onChange={this.handleChange}
              className="materialize-textarea validate"/>
            </div>
          {inputs}
          <button
            type="button"
            onClick={this.handleNewIngredient}
            className="waves-effect waves-teal btn-flat btnPosLeft"
          >
            <i class="fas fa-plus-circle"></i>
          </button>
          
            <div className='input-field col s6'>
              <label htmlFor='recipe-img-input'>Image Url</label>
              <input
                id='recipe-img-input'
                type='text'
                placeholder=''
                name='img'
                value={img}
                size={46}
                autoComplete='off'
                onChange={this.handleChange}
                className="validate"/>
            </div>
          
          <button
            type="submit"
            className="waves-effect waves-light btn light-green darken-3"
            style={{alignSelf: 'flex-end', marginRight: 0}}
          >
            Save
          </button>
        </form>
      </div>
    )
  }
}

export default RecipeInput;