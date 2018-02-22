import React from 'react';
import PropTypes from 'prop-types';

require('../stylesheets/_main.scss');

class AddressComponent extends React.Component {
  render() {
    return (
      <div className='address_form'>
        <div className="address_form__field">
          <h2> Where are you located? </h2>
        </div>
        <form>
          <label htmlFor='addressLineOne' className="address_form__field__label"> Address Line One: </label>
          <input className="address_form__field__input" type="text" name="addressLineOne" />

          <label className="address_form__field__label"> Address Line Two: </label>
          <input className="address_form__field__input" type="text" name="addressLineTwo" />

          <label className="address_form__field__label">
            City:
          </label>
          <input className="address_form__field__input" type="text" name="city" />

          <label className="address_form__field__label">
            State:
          </label>
          <input className="address_form__field__input" type="text" name="state" />


          <label className="address_form__field__label">
            ZIP|Postal Code:
          </label>
          <input className="address_form__field__input" type="text" name="zipcode" />


          <label className="address_form__field__label"> Country: </label>
          <select value="USA" className="address_form__field__input">
            <option value="USA">USA</option>
          </select>

          <button className="address_form__next-button" onClick={this.props.nextClicked} type="button">
            <span>
              Next
            </span>
          </button>
         </form>
    </div>);
  }
}


AddressComponent.propTypes = {
  nextClicked: PropTypes.func,
};

export default AddressComponent;
