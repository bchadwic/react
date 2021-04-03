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
//Modal {setFade ? Modal-Fade-In : Modal-Fade-Out}

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
        console.log("Word state is set to " + addWord);
        console.log("Definition state is set to " + addDefinition);

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


/**
 * 
 
 App.js
import React, { Component } from ‘react’;
import ‘./App.css’;
export default class App extends Component{
    constructor(){
        super();
        this.state={ name:’’, email:’’ }
    }

    handleChange = event =>{
        this.setState({ [event.target.name]:event.target.value })
    }

    handleSubmit = event =>{
        event.preventDefault();
        console.log(“User name : “ + this.state.name)
        console.log(“User Email : “ + this.state.email)
        const url =”https://jsonplaceholder.typicode.com/users/”
        const data = { name:this.state.name, email:this.state.email }
        fetch(url, { method: ‘POST’, // or ‘PUT’
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{ ‘Content-Type’: ‘application/json’ } })
        .then(res => res.json())
        .catch(error => console.error(‘Error:’, error))
        .then(response => console.log(‘Success:’, response)); 
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <input type=”text” name=”name” onChange={this.handleChange} />
            <input type=”email” name=”email” onChange={this.handleChange} />
            <input type=”submit” value=”Add user” /> </form> 
        )
    }
} 
 * 
 * 
 * 
 * 
 */
