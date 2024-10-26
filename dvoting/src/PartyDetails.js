import { useParams } from 'react-router-dom';
import useFetch from './UseFetch';
import { useState } from 'react';

const PartyDetails = () => {
  const { id } = useParams();
  const { data: parties, error, isPending } = useFetch(`http://localhost:8000/party`);
  const [message, setMessage] = useState('');

  const party = parties ? parties.find(p => p.id === parseInt(id)) : null;

  return (
    <div className="party-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {message && <p>{message}</p>}
      
      {party ? (
        <article>
          <h2>{party.partyName}</h2>
          <img src={`http://localhost:8000/${party.partySymbol}`} alt={`${party.partyName} symbol`} />
          <p>Leader: {party.leadersName}</p>
          <p>Abbreviation: {party.partyAbbreviation}</p>
          <p>Manifesto: {party.partyManifesto}</p>
          <p>Contact Email: {party.contactInformation.email}</p>
          <p>Contact Phone: {party.contactInformation.phoneNumber}</p>
          <p>Official Address: {party.contactInformation.officialAddress}</p>
          <p>Registration Number: {party.partyRegistrationNumber}</p>
          <p>Founded: {new Date(party.foundingDate).toLocaleDateString()}</p>
          <p>Color: {party.partyColor}</p>
        </article>
      ) : (
        !isPending && !error && <div>Party not found</div>
      )}
    </div>
  );
};

export default PartyDetails;
