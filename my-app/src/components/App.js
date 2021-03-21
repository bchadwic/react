import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Header from "./Header";
import Word from './Word';
import SearchBar from './SearchBar';
import Footnote from './Footnote';
import '../styles/App.css';

const App = () => {

    return (
        <div className="App">
            <Header/>
            <Word />
            <SearchBar />
            {true ? <Footnote wordOfTheDay="word" /> : <hr />}
        </div>
  );

}

export default App;
