import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.css';
import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Word from './Word';
import Footnote from "./Footnote";



class App extends React.Component {


    constructor() {
        super();
    }


  render() {
      return (
          <div className="App">
              <Header/>
              <Word currentWord="Bubble Word" />
              <Footnote/>
          </div>
      );
  }

}

export default App;
