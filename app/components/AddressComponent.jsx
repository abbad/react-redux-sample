import React from 'react';

require('../stylesheets/_main.scss');


export default class AddressComponent extends React.Component {

  render() {
    return (<div className='address_form'>
      <div className="field">
        <h2>Where are you located? </h2></div>
      <form>
        <div className="field">
          <label htmlFor='addressLineOne'> Address Line One: </label>
          <input type="text" name="addressLineOne" />
        </div>
        <div className="field">
          <label> Address Line Two: </label>
          <input type="text" name="addressLineTwo" />
        </div>
        <div className="field"> <label> City </label>
            <input type="text" name="city" />
            </div>
        <div className="field">
            <label> State </label>
                <input type="text" name="state" />
        </div>
        <div className="field">
          <label> ZIP|Postal Code: </label>
            <input type="text" name="zipcode" />
        </div>
        <div className="field">
          <label> Country: </label>
          <select value="USA" >
                  <option value="USA">USA</option>
            </select>
        </div>
        <div className="field">
        <input type="button" value="Next" />
        </div>
        </form>
    </div>);
  }
}
