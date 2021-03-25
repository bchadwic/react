import ResultRank from './ResultRank';

const ResultSideBar = ({user, date, rank}) => {
    return (
        <aside className="Result-Side-Bar">
            <ResultRank 
                rank = {rank} 
            />
            <div className="Result-Defined-By mx-2">
                <p>
                    {user}
                    <br/>
                    <i>created </i> 
                    {date}
                </p>
            </div>
        </aside>
    );
};

export default ResultSideBar;