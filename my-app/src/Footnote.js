// manage all the bootstrap for the searchbar
import Container from "react-bootstrap/Container";


const Footnote = props => {
    if(props.default){
        // TODO add random word from meriam webster api
        return (
            <Container>
                <h5 className='mt-3'>Word of the day is <a href='#'><u>Hello</u></a>.</h5>
            </Container>
        )
    }
    return null;
}

export default Footnote 