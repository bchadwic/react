import '../styles/Modal.css';
import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { unsetAdd } from '../actions';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Modal = () => {

    const dispatch = useDispatch();
    let setFade = false;

    useEffect(() => {
        setFade = !setFade;
    }, []);

    const closeHandler = () => {
        dispatch(unsetAdd());
    };
//Modal {setFade ? Modal-Fade-In : Modal-Fade-Out}

    const wordInsertionHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div className="Modal-Back-Drop">
        <div className='Modal'>
            <div className="Modal-Header">
                <h4 className='Modal-Contribute'>Contribute to the dictionary!</h4>
                <h4 className='Modal-Exit' onClick={closeHandler}>X</h4>
            </div>
            <Form method='POST' action={wordInsertionHandler}>
                    <div className="Modal-Word">
                        <FormControl id='Modal-Word-Input' name='word' id='word' placeholder="Type the word you'd like to add"/>
                    </div>
                    <div className="Modal-Definition">
                        <Form.Control className="Modal-Definition-Input" name='definition' id='definition' as='textarea' rows={5}/>
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