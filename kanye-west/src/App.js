import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchQuote, addFavQuote } from './store/actions';

function App() {
  const dispatch = useDispatch();
  const quote = useSelector((state) => {
    return state.singleQuote;
  });
  const favQuoteSt = useSelector((state) => {
    return state.favQuoteStore;
  });
  // const ownQuoteStore = useSelector((state) => {
  //   return state.ownQuote;
  // });
  const [input, setInput] = useState({
    ownQuote: '',
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  const castQuote = () => {
    // e.preventDefault();
    // console.log('lol');

    dispatch(fetchQuote());
  };
  const addQuote = (input) => {
    // e.preventDefault();
    console.log(input);
    // dispatch(addFavQuote(input))
  };
  const addOwnQuote = () => {
    console.log(input.ownQuote);
  };
  useEffect(() => {
    dispatch(fetchQuote());
    // dispatch(fetchQuote());
    // setInput(quote);
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{quote}</p>
        <button onClick={castQuote}>Castquote</button>
        <br />
        <button
          onClick={() => {
            addQuote(quote);
          }}
        >
          add Favorite
        </button>
        <p>__________________________</p>
        <p>{favQuoteSt}</p>

        <p> add Own Quote</p>
        <input
          type="text"
          name="ownQuote"
          value={input.ownQuote}
          onChange={handleInputChange}
        />
        <button
          onClick={() => {
            addOwnQuote();
          }}
        >
          add Favorite
        </button>
        <p>------------------------</p>
        {/* <p>{ownQuoteStore}</p> */}
      </header>
    </div>
  );
}

export default App;
