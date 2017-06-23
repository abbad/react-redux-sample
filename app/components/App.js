import React from 'react';
import PropTypes from 'prop-types';

const App = ({ children }) =>
    <div className="wrapper">
        <div className="content">
            <div className="row">
                <div className="columns small-12">
                    {children}
                </div>
            </div>
        </div>
    </div>;

App.propTypes = {
  children: PropTypes.object,
};

export default App;
