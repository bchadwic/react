import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { useSelector } from 'react-redux';
import Header from "./Header";
import Word from './Word';
import SearchBar from './SearchBar';
import Results from './Results';
import Footnote from './Footnote';
import '../styles/App.css';
import Modal from './Modal';

const App = () => {

    const isDefault = useSelector(state => state.isDefault);
    const isAdding = useSelector(state => state.isAdding);

    return (
        <div className="App">
            <Header/>
            <Word />
            <SearchBar />
            {isAdding ? <Modal /> : ""}
            {isDefault ? <Footnote /> : <Results />}
        </div>
  );

}

export default App;
