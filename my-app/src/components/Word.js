// manage all the bootstrap for the searchbar
import { React } from "react";
import { useSelector } from "react-redux";


const Word = () => {

    const currentWord = useSelector(state => state.currentWord);
    
    return (
        <h2 className='display-3 mt-5'>{ currentWord }</h2>
    );

}


export default Word;