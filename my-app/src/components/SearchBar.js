// manage all the bootstrap for the searchbar
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import React from "react";
import '../styles/SearchBar.css';
import Footnote from "./Footnote";

class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {
            word : "",
            default : true
        }
    }

    // validate makes sure the value of Search-Box is a word that should be looked up
    validate = () => {
        let currentWord = (document.getElementById("Search-Box").value);
        if(currentWord === ""){
            currentWord = "Word Bubble";
        }
        this.setState({input : currentWord, default : currentWord === "Word Bubble"});
        this.props.setWord(currentWord);
    }

    // searchEnter responds to the key event Enter on the searchbar
    searchEnter = (e) => {
        if(e.key === 'Enter'){
            this.validate();
        }
    }

    // searchClick responds to the search button being clicked
    searchClick = () => {
        this.validate();
    }

    // render is the output of the SearchBar class
    render() {
        return (
            <Container>
                <InputGroup id='Search-Container' className="mt-5 mx-auto" size='lg'>
                    <FormControl
                        onKeyDown={this.searchEnter}
                        id='Search-Box'
                        placeholder="Type a word to begin"
                        aria-label=""
                    />
                    <InputGroup.Append>
                        <InputGroup>
                            <Button id='Search-Button' className='success' size='lg' onClick={this.searchClick}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="mb-2 bi bi-search" viewBox="0 0 16 16">
                                    <path
                                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg>
                            </Button>
                        </InputGroup>
                    </InputGroup.Append>
                </InputGroup>
                <Footnote default={this.state.default}/>
            </Container>
        )
    }
}

export default SearchBar