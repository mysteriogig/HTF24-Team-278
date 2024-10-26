import PartyList from "./PartyList";
import useFetch from "./UseFetch";

const Home= () => {
    const{ data: Party, isPending, error} = useFetch('http://localhost:8000/party');
    console.log(Party)
    return ( 
        <div className="home">
            {error && <div>(error)</div>}
            {isPending && <div>Loading...</div>}
            {Party && <PartyList party={Party} title="All Party"/>}
            
        </div>
     );
    }
 
export default Home;