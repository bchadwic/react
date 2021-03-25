import ResultSideBar from './ResultSideBar';
import ResultDefinition from './ResultDefinition';

const Result = ({definition, rank, user, date}) => {
    return (
        <div className="Result-Box">
            <ResultDefinition 
                definition = {definition} 
            />
            <ResultSideBar 
                rank = {rank} 
                user = {user} 
                date = {date} 
            />
        </div>
    );
};

export default Result;