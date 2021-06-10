import { combineReducers } from 'redux';
import pizzaReducer from './pizza/pizzaReducer';
import pastaReducer from './pasta/pastaReducer';

const rootReducer = combineReducers({
    pizza: pizzaReducer,
    pasta: pastaReducer
})
export default rootReducer;