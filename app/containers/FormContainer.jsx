import React from 'react';

require('../stylesheets/_main.scss');


export default class FormContainer extends React.Component {

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
              <select value="USA" >
                  <option value="USA">USA</option>
              </select>
          <input type="button" value="Next" />
        </form>
    </div>);
  }
}
