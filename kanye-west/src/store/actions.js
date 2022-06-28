import axios from 'axios';

export function fetchApiData(payload) {
  return {
    type: 'FETCH_API_QUOTE',
    payload,
  };
}
export function addFav(payload) {
  return {
    type: 'ADD_FAV_QUOTE',
    payload,
  };
}
export function addOwnQ(payload) {
  return {
    type: 'ADD_OWN_QUOTE',
    payload,
  };
}

export function fetchQuote() {
  return (dispatch, getState) => {
    axios.get(`https://api.kanye.rest`).then((res) => {
      //   console.log(res.data.quote);
      dispatch({ type: 'FETCH_API_QUOTE', payload: res.data.quote });
      // res.json();
    });
  };
}

export function addFavQuote(input) {
  return (dispatch, getState) => {
    // const state = getState();
    // console.log(input);
    dispatch({ type: 'ADD_FAV_QUOTE', payload: input });
  };
}
export function addOwnQuote(input) {
  return (dispatch, getState) => {
    // const state = getState();
    // console.log(state);
    dispatch({ type: 'ADD_OWN_QUOTE', payload: input });
  };
}
