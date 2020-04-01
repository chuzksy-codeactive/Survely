import React from 'react'
import SurveyForm from './SurveyForm';
import SurveyReview from './SurveyFormReview';
import { reduxForm } from 'redux-form';

class SurveyNew extends React.Component {
  state = {
    showFormReview: false
  }

  renderContent() {
    if (this.state.showFormReview) {
      return <SurveyReview onCancel={() => this.setState({ showFormReview: false })} />
    }

    return <SurveyForm onSurveySubmit={() => this.setState({ showFormReview: true })} />
  }

  render() {
    return (
      <div className="container">
        {this.renderContent()}
      </div>
    )
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyNew); 
