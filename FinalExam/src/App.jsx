import useDataFromCsv from './hooks/useDataFromCsv';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

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

      <main>
      </main>

      <Footer />
    </>
  );
}

export default App;
