import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';

import About from './containers/AboutContainer.jsx';
import FormContainer from './containers/FormContainer.jsx';
import HomeContainer from './containers/HomeContainer.jsx';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomeContainer}/>
		<Route path="/get-started" component={FormContainer}/>
		<Route path="/about" component={About}/>
	</Route>
);
