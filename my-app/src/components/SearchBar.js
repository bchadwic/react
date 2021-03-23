import {React, useRef} from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { useDispatch, useSelector } from "react-redux";
import { setWord, setDefault } from '../actions';
import '../styles/SearchBar.css';

const SearchBar = () => {

    const currentWordInput = useRef(null);
    const isDefault = useSelector(state => state.isDefault);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        let currentWord = currentWordInput.current.value === '' ? 'Word Bubble' : currentWordInput.current.value;
        let words = currentWord.split(' ');
        for(let i = 0; i < words.length; i++){
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }
        currentWord = words.join(' ');
        dispatch(setWord(currentWord));
        if(isDefault){
            dispatch(setDefault());
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <InputGroup id='Search-Container' className="mt-5 mx-auto" size='lg'>
                <FormControl id='Search-Box'placeholder="Type a word to begin" ref={currentWordInput}/>
                <InputGroup.Append>
                    <InputGroup>
                        <Button id='Search-Button' className='success' size='lg' type='submit'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="mb-2 bi bi-search" viewBox="0 0 16 16">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </Button>
                    </InputGroup>
                </InputGroup.Append>
            </InputGroup>
        </form>
    )
}

export default SearchBar