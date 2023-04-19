import { combineReducers } from 'redux';
import imageReducer from './imageReducer';

const rootReducer = combineReducers({
  image: imageReducer,
  // Agrega otros reducers aquí si los tienes...
});

export default rootReducer;