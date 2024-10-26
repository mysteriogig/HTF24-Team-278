import { Link } from 'react-router-dom';

const PartyList = ({ party }) => {
    if (!party || party.length === 0) {
        return <div>No parties available at the moment.</div>;
    }

    return (
        <div className="party-list">
            {party.map(partyItem => (
                <div className="party-preview" key={partyItem.id}>
                    <Link to={`/party/${partyItem.id}`}>
                        <h2>{partyItem.partyName}</h2>
                        <p>Leader: {partyItem.leadersName}</p>
                        {partyItem.partySymbol && (
                            <img 
                                src={`http://localhost:8000/${partyItem.partySymbol}`} 
                                alt={`${partyItem.partyName} symbol`} 
                                className="party-symbol-preview"
                            />
                        )}
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default PartyList;
