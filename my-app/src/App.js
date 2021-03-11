import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.css';
import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Title from './Title';

function App() {
  return (
    <div className="App">
      <Header/>
      <Title/>
      <SearchBar/>
    </div>
  );
}

export default App;
