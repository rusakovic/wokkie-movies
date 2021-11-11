import {combineReducers} from 'redux';

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'value':
      return state;

    default:
      return state;
  }
};
export const rootReducer = combineReducers({reducer});
