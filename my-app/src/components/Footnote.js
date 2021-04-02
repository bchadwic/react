import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setWord, setDefault } from '../actions';
import { Button } from 'react-bootstrap';

const Footnote = () => {

    const [randomWord, setRandomWord] = useState("");
    const dispatch = useDispatch;

    useEffect(() => {
                // TODO change localhost to domain name once my-app is implemented on the server
            fetch('http://localhost:3001/get/randomWord/')
            .then(response => response.json())
            .then(
                (result) => {
                    setRandomWord(result[0].word);
                }
            )
            .catch(err => console.log(err))

    }, [randomWord]);

    const randomWordHandler = (e) => {
        e.preventDefault();
        dispatch(setDefault());
    }

    // TODO get passed the redux conflict by changing th current word to the random word selectd, that is shown
    return (
        <h5 className='mt-3'>Learn a new word <Button onClick={() => {dispatch(setWord(randomWord))}}>{randomWord}</Button>.</h5>
    )
}

export default Footnote; 