// manage all the bootstrap for the searchbar
import { React, useState } from "react";


const Word = () => {
    const [word, setWord] = useState("Word Bubble");
    
    return (
        <h2 className='display-3 mt-5'>{word}</h2>
    );

}


export default Word;