import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.css';
import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Word from './Word';
import Footnote from "./Footnote";

function App() {
  return (
    <div className="App">
      <Header/>
      <Word/>
      <SearchBar/>
      <Footnote />
    </div>
  );
}

export default App;
