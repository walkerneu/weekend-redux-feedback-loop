import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';

const feelings = (state = 0, action) => {
  if (action.type === "SET_FEELINGS"){
    return action.payload
  }
  else if (action.type === "RESET_VALUES"){
    return '';
  }
  return state;
}
const understanding = (state = 0, action) => {
  if (action.type === "SET_UNDERSTANDING") {
    return action.payload;
  }
  else if (action.type === "RESET_VALUES"){
    return '';
  }
  return state;
};
const support = (state = 0, action) => {
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
const allFeedback = (state = [], action) => {
    if (action.type === "STORE_ALL_FEEDBACK"){
        return action.payload;
    }
    return state;
}

const store = createStore(
  combineReducers({
    feelings, understanding, support, comments, allFeedback
  }),
  applyMiddleware(logger),
);


export default store;