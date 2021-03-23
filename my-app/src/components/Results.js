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
            <hr className="divider" />
            <Container >
                {results.map(result => ( 
                <Card className="my-2">
                    <Card.Body> 
                        <Card.Text className="Card-Text">
                            <h3>{result.definition}</h3>
                        </Card.Text>
                        <div className>
                            <p><b>{result.rank}</b></p>
                        </div>
                    </Card.Body>
                    <Card.Footer className="Card-Footer">{result.user}</Card.Footer>
                </Card>
                ))}
                </Container>
        </div>
    );
};

export default Results; 