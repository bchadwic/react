// manage all the bootstrap for the searchbar
import Container from "react-bootstrap/Container";
import './style/Word.css';
import React from "react";

class Word extends React.Component {

    constructor() {
        super();
        this.state = {currentWord: "Word Bubble"};
    }


    render() {
        return (
            <Container id='Title-Container' >
                <h2 className='display-3'>{this.state.currentWord}</h2>
            </Container>
        );
    }

}


export default Word