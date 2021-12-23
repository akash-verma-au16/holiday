import axios from 'axios';
import { SET_DATA, SET_ERROR } from './types';

export const getData = () => (dispatch) => {
  axios
    .get('https://www.gov.uk/bank-holidays.json')
    .then((res) =>
      dispatch({
        type: SET_DATA,
        payload: res.data,
      })
    )
    .catch((err) => {
      console.log(err);
      dispatch({
        type: SET_ERROR,
        payload: 'Something Went Worng',
      });
    });
};
