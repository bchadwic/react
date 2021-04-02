import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setWord, unsetDefault } from '../actions';
import { Button } from 'react-bootstrap';

const Footnote = () => {

    const [randomWord, setRandomWord] = useState("");
    const dispatch = useDispatch();

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
        dispatch(setWord(randomWord));
        dispatch(unsetDefault());
    }

    return (
        <h5 className='mt-3'>Learn a new word <Button onClick={randomWordHandler}>{randomWord}</Button>.</h5>
    )
}

export default Footnote; 