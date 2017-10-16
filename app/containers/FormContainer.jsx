import React from 'react';

import AddressComponent from '../components/AddressComponent.jsx';

export default class FormContainer extends React.Component {

  handleNextButtonClicked() {
    console.log(this);
  }

  render() {
    return (
      <div>
        <AddressComponent nextClicked={this.handleNextButtonClicked}/>
      </div>
    );
  }
}
