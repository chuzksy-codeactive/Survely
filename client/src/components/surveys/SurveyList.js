import React from 'react'
import { connect } from 'react-redux';
import { fetchSurveys } from './../../actions/index';

class SurveyList extends React.Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys(surveys) {
    if (surveys.length) {
      return surveys.reverse().map(survey => {
        return (
          <div className="card darken-1" key={survey._id}>
            <div className="card-content">
              <span className="card-title">{survey.title}</span>
              <p>
                {survey.body}
              </p>
              <p className="right">
                Sent On: {new Date(survey.dateSent).toLocaleDateString()}
              </p>
            </div>
            <div className="card-action">
              <a>Yes: {survey.yes}</a>
              <a>No: {survey.no}</a>
            </div>
          </div>
        );
      })
    }
    return (<div><h4>Empty survey list. <br /> Click on the red button to send out surveys</h4></div>);
  }

  render() {
    return (
      <div className="container">
        {this.renderSurveys(this.props.surveys)}
      </div>
    )
  }
}

const mapStateToProps = ({ surveys }) => ({ surveys });

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);