import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initState = {
  singleQuote: '',
  favQuoteStore: [],
  ownQuote: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_API_QUOTE':
      return { ...state, singleQuote: action.payload };
    case 'FETCH_FAV_QUOTE':
      return state.favQuoteStore;
    case 'ADD_FAV_QUOTE':
      this.favQuoteStore.push(action.payload);
      //   return state;
      break;
    case 'ADD_OWN_QUOTE':
      this.ownQuote.push(action.payload);
      return state;
    case 'FETCH_OWN_QUOTE':
      return state.ownQuote;
    default:
      return state;
  }
};
const store = createStore(reducer, applyMiddleware(thunk));
export default store;
