import './App.css';
import { TOURNAMENT } from './common/tournament';
import useDataFromCsv from './hooks/useDataFromCsv';

const csvFile = {
  matches: 'matches',
  players: 'players',
  records: 'records',
  teams: 'teams',
};

function App() {
  const matches = useDataFromCsv('matches');

  console.log(matches);

  return (  
    <>
      <h1>{TOURNAMENT}</h1>


    </>
  );
}

export default App;
