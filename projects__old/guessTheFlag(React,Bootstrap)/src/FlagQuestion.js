import React, {Component} from 'react';
import FlagChoices from './FlagChoices'
import FlagAnswer from './FlagAnswer';
import './FlagQuestion.css';

const QuestionStates = {
  QUESTION: 1,
  ANSWER_WRONG: 2,
  ANSWER_CORRECT: 3
};


class FlagQuestion extends Component {
  static defaultProps = {
    options: []
  }

  constructor(props) {
    super(props);
    this.state = {
      userChoice: undefined,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({userChoice: Number(e.target.value)});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onGuess(this.state.userChoice);
  }

  render() {
    const {
      flag,
      questionState,
      options,
      answerText,
      onNext
    } = this.props;
    const {userChoice} = this.state;
    let opts = options.map(opt => ({
      ...opt,
      checked: userChoice === opt.id
    }));
    let output = questionState === QuestionStates.QUESTION ?
      (<FlagChoices handleChange={this.handleChange}
                   handleSubmit={this.handleSubmit}
                   options={opts} />) :
      (<FlagAnswer
        correct={questionState === QuestionStates.ANSWER_CORRECT}
        answer={answerText}
        onNext={onNext} />);

    return (
      <div className="container">
        {output}
        
        <div className="card m-5 shadow-lg p-3 mb-5 bg-white rounded">
        <img
           className="card-img-top"
           src={flag}
           alt="Guess the flag"
         />
      
         </div>
      </div>
    );
  }
}

export default FlagQuestion;
export { QuestionStates };