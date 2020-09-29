import React from 'react';
import store from './store';
import {Provider} from 'react-redux';
import Footer from './component/common/Footer';
import Home from './component/pages/Home';

function App() {
  return (
    <Provider store={store}>
      <div className="m-0 p-0 bg-white">
        <Home/>
        <Footer/>
      </div>
    </Provider>
  );
}

export default App;
