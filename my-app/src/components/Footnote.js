const Footnote = () => {

    const [randomWord, setRandomWord] = useState("");

    useEffect(() => {
            // TODO change localhost to domain name once my-app is implemented on the server
            fetch('http://localhost:3001/get/randomWord/')
            .then(response => response.json())
            .then(
                (result) => {
                    setRandomWord(result);
                }
            )
            .catch(err => console.log(err))

    }, [randomWord]);

    return (
        <h5 className='mt-3'>Learn a new word <a>{randomWord}</a>.</h5>
    )
}

export default Footnote; 