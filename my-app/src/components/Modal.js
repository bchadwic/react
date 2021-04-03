import '../styles/Modal.css';
import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { setWord, unsetAdd } from '../actions';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Modal = () => {

    const dispatch = useDispatch();
    const [addWord, setAddWord] = useState("");
    const [addDefinition, setAddDefinition] = useState("");
    let setFade = false;


    useEffect(() => {
        setFade = !setFade;
    }, []);

    const closeHandler = () => {
        dispatch(unsetAdd());
    };

    const wordChangeHandler = (e) => {
        switch(e.target.name){
            case "addWord":
                setAddWord(e.target.value);
                break;
            case "addDefinition":
                setAddDefinition(e.target.value);
                break;
            default:
                console.log("Handling unkown event, from Modal wordChangeHandler");
                break;
        }
    }

    const wordSubmitHandler = (e) => {
        e.preventDefault();
        // TODO move capitalization function to server validation once server validation is in process
        let validatedAddWords = addWord.split(' ');
        for(let i = 0; i < validatedAddWords.length; i++){
            validatedAddWords[i] = validatedAddWords[i][0].toUpperCase() + validatedAddWords[i].substr(1);
        }
        validatedAddWords = validatedAddWords.join(' ');
        const url = "http://localhost:3001/post/";
        const body = { word: validatedAddWords, definition: addDefinition};
        fetch(url, { method: 'POST', 
            body: JSON.stringify(body),
            headers:{ 'Content-Type': 'application/json' } })
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response)); 
        dispatch(setWord(validatedAddWords));
        closeHandler();
        
    }

    return (
        <div className="Modal-Back-Drop">
        <div className='Modal'>
            <div className="Modal-Header">
                <h4 className='Modal-Contribute'>Contribute to the dictionary!</h4>
                <h4 className='Modal-Exit' onClick={closeHandler}>X</h4>
            </div>
            <Form onSubmit={wordSubmitHandler}>
                    <div className="Modal-Word">
                        <FormControl id='Modal-Word-Input' name='addWord' placeholder="Type the word you'd like to add" onChange={wordChangeHandler}/>
                    </div>
                    <div className="Modal-Definition">
                        <Form.Control className="Modal-Definition-Input" name='addDefinition' as='textarea' onChange={wordChangeHandler} rows={5}/>
                    </div>
                    <div className="Modal-Submit">
                        <Button className="Modal-Submit-Input" type='submit'>Submit</Button>
                    </div>
            </Form>
        </div>
        </div>
    );
};

export default Modal;