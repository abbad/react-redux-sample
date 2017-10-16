import React from 'react';
import PropTypes from 'prop-types';

const App = ({ children }) =>
    <div className="wrapper">
        <div className="content">
          {children}
        </div>
    </div>;

App.propTypes = {
  children: PropTypes.object,
};

export default App;
