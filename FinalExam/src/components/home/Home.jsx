import FinalsMap from '../finalsMap/FinalsMap';
import styles from './Home.module.css';

function Home({ matches, teams }) {
    
    return (
        <>  
            <h1>Home</h1>
            <FinalsMap matches={matches} teams={teams} />
        </>
    );
}

export default Home;
