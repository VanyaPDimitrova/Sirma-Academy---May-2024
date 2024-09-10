import useDataFromCsv from './hooks/useDataFromCsv';

import Header from './components/header/Header';

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
      <Header />

    </>
  );
}

export default App;
