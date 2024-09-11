import { Route, Routes } from 'react-router-dom';

import useDataFromCsv from './hooks/useDataFromCsv';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';

const csvFiles = {
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
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </main>

            <Footer />
        </>
    );
}

export default App;
