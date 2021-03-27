import Result from './results-components/Result';
import '../styles/Results.css';
import { React, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Results = () => {

    // const results = [ 
    //         {date: "12/22/21", definition : "A web app that utilizes an open-source dictionary platform. This is used as a study tool and it is a great way to remember definitions for tests A web app that utilizes an open-source dictionary platform. This is used as a study tool and it is a great way to remember definitions", rank: 4, user: "Ben"},
    //         {date: "12/22/21", definition : "A place to study insert and collaborate defined study words", rank: 2, user: "Sarah"},
    //         {date: "12/22/21", definition : "A place to post words", rank: -1, user: "Nick"},
    //         {date: "12/22/21", definition : "Hello World", rank: -22334242, user: "Joe"}
    //     ];

    // future reference, make this an empty array by default to be able to use
    const [results, setResults] = useState([]);
    const currentWord = useSelector(state => state.currentWord);


    

    useEffect(() => {
            // TODO change localhost to domain name once my-app is implemented on the server
            fetch('http://localhost:3001/get/findWord' + currentWord)
            .then(response => response.json())
            .then(
                (results) => {
                    setResults(results);
                }
            )
            .catch(err => console.log(err))

            console.log("running effect");

    }, [currentWord]);

    return (
        <div>
            <div className="Divider mt-3"></div>
            <div className="Result-Root">
                <div className="Results">
                    {results.map(result => ( 
                        <Result 
                            definition = {result.definition} 
                            rank       = {result.rank} 
                            user       = {result.user} 
                            date       = {result.date} 
                        />
                    ))}
                </div>
            </div>
            <div className="Divider mb-4"></div>
        </div>
    );
};

export default Results; 