import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Header from "./Header";
import Word from './Word';
import '../styles/App.css';



class App extends React.Component {


    constructor() {
        super();
    }


  render() {
      return (
          <div className="App">
              <Header/>
              <Word />
          </div>
      );
  }

}

export default App;
