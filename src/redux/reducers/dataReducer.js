import { SET_DATA, SET_ERROR } from '../actions/types';

const initialState = {
  error: null,
  json: null,
  eng_wales: null,
  scotland: null,
  nor_ireland: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        json: action.payload,
        eng_wales: action.payload['england-and-wales'],
        scotland: action.payload['scotland'],
        nor_ireland: action.payload['northern-ireland'],
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
