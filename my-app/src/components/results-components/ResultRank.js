import '../../styles/Results.css';

const ResultRank = ({rank}) => {
    return (
        <div className="Result-Rank">
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="Up-Arrow" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg></a>
            <div className="Result-Number">
                <h4 className="my-2"><b>{rank}</b></h4>
            </div>
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="Down-Arrow" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg></a>
        </div>
    );
};

export default ResultRank;