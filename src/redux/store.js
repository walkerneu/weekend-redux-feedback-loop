import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';

const feelings = (state = '', action) => {
  if (action.type === "SET_FEELINGS"){
    return action.payload
  }
  else if (action.type === "RESET_VALUES"){
    return '';
  }
  return state;
}
const understanding = (state = '', action) => {
  if (action.type === "SET_UNDERSTANDING") {
    return action.payload;
  }
  else if (action.type === "RESET_VALUES"){
    return '';
  }
  return state;
};
const support = (state = '', action) => {
  if (action.type === "SET_SUPPORT") {
    return action.payload;
  }
  else if (action.type === "RESET_VALUES"){
    return '';
  }
  return state;
};
const comments = (state = '', action) => {
  if (action.type === "SET_COMMENTS") {
    return action.payload;
  }
  else if (action.type === "RESET_VALUES"){
    return '';
  }
  return state;
};

const store = createStore(
  combineReducers({
    feelings, understanding, support, comments
  }),
  applyMiddleware(logger),
);


export default store;