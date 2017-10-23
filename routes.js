import React from 'react';
import App from './src/App';

import { Router, Route, IndexRoute ,browserHistory } from 'react-router';

const Root = React.createClass({
  render(){
    return(
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={App}/>
        </Route>
      </Router>
    );
  }
});

export default Root;
