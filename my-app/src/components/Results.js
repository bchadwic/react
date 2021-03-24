import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import '../styles/Results.css';

const Results = () => {

    const currentWord = "Word Bubble";
    const results = [ 
            {definition : "A web app that utilizes an open-source dictionary platform. This is used as a study tool and it is a great way to remember definitions for tests A web app that utilizes an open-source dictionary platform. This is used as a study tool and it is a great way to remember definitions", rank: 4, user: "Ben"},
            {definition : "A place to study insert and collaborate defined study words", rank: 2, user: "Sarah"},
            {definition : "A place to post words", rank: -1, user: "Nick"},
            {definition : "Hello World", rank: -2, user: "Joe"}
        ];

    return (
        <div>
            <div className="Divider mt-3"></div>
        <div className="Result-Root">
            <div className="Results">
                {results.map(result => ( 
                <div className="Result-Box">
                    <div className="Result-Body"> 
                        <div className="Result-Text">
                            <h4><i>{currentWord}</i> ~ {result.definition}</h4>
                        </div>
                    </div>
                    <aside className="Result-Side-Bar">
                        <div className="Result-Rank my-3">
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="Up-Arrow" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg></a>
                            <h4 className="my-2"><b>{result.rank}</b></h4>
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="Down-Arrow" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg></a>
                        </div>
                        <div className="Result-Defined-By mx-2">
                            <p>
                                <i>defined by</i><br/> {result.user}
                            </p>
                        </div>
                    </aside>
                </div>
                ))}
            </div>
        </div>
            <div className="Divider mb-4"></div>
        </div>
    );
};

export default Results; 