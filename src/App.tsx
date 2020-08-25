import React from 'react';
import './App.css';
import './styles/themes.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import IndexPage from './containers/IndexPage/IndexPage';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={IndexPage}></Route>
          <Route path="/home" component={() => <div>home</div>}></Route>
          <Route path="/dashboard" component={() => <div>Dashboard</div>}></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
