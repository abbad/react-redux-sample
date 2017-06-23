import React from 'react';

export default class FormContainer extends React.Component {

  handleChange(event) {
    console.log(event);
  }

  render() {
    return (<div className='form_container'>
      Where are you located?
      <form>
        <label>
          Address Line One:
            <input type="text" name="addressLineOne" />
          </label>
          <label>
            Address Line Two:
              <input type="text" name="addressLineTwo" />
            </label>
            <label>
              City
              <input type="text" name="city" />
            </label>
            <label>
              State
                <input type="text" name="state" />
              </label>
              <label>
                ZIP|Postal Code:
                  <input type="text" name="zipcode" />
              </label>
              <select value="USA" onChange={ this.handleChange }>
                  <option value="USA">USA</option>
              </select>
          <input type="button" value="Next" />
        </form>
    </div>);
  }
}
