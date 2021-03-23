import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import '../styles/Results.css';

const Results = () => {

    const currentWord = "Word Bubble";
    const results = [ 
            {definition : "A web app that utilizes a open-source dictionary platform. This is used as a study tool and it is a great way to remember definitions for tests", rank: 4, user: "Ben"},
            {definition : "A place to study insert and collaborate defined study words", rank: 2, user: "Sarah"},
            {definition : "A place to post words", rank: -1, user: "Nick"}
        ];

    return (
        <div>
        <hr />
        <div className="Result-Root">
            <div className="Results">
                {results.map(result => ( 
                <div className="Result-Box">
                    <div className="Result-Body"> 
                        <div className="Result-Text">
                            <h3>{result.definition}</h3>
                        </div>
                    </div>
                    <div className="Result-Side-Bar">
                        <p><b>{result.rank}</b></p>
                        <p>
                            {result.user}
                        </p>
                    </div>
                </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default Results; 