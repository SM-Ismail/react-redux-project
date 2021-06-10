import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import FoodContainer from './components/FoodContainer';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <FoodContainer />
      </div>
    </Provider>
    
  );
}

export default App;
