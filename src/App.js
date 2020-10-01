import React from 'react';
import store from './store';
import {Provider} from 'react-redux';
import Footer from './component/common/Footer';
import Home from './component/pages/Home';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Details from './component/pages/Details';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/details/" component={Details} />
        </Switch>
        <Footer/>
      </Router>
    </Provider>
  );
}

export default App;
