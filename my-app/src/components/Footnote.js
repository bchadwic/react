const Footnote = () => {

    // TODO make a state management for the word of the day
    const wordOfTheDay = "hello";

    return (
        <h5 className='mt-3'>Word of the day is <button><u>{wordOfTheDay}</u></button>.</h5>
    )
}

export default Footnote; 