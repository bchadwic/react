// manage all the bootstrap for the searchbar
import Container from "react-bootstrap/Container";
import './style/Word.css';
import React from "react";
import SearchBar from "./SearchBar";

class Word extends React.Component {

    constructor(props) {
        super();
        this.state = {
            currentWord : "Bubble Word"
        };
    }

    setWord = (word) => {
        this.setState({currentWord : word});
    }


    render() {
        return (
            <Container id='Title-Container' >
                <h2 className='display-3'>{this.state.currentWord}</h2>
                <SearchBar setWord={this.setWord}/>
            </Container>
        );
    }

}


export default Word