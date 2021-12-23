import './app.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Holiday from './components/Holiday';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <h1 className="title-head">Holiday Finder</h1>
          <Switch>
            <Route exact path="/" component={Holiday} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
