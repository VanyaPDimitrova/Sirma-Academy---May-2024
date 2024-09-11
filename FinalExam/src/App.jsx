import { Route, Routes } from 'react-router-dom';

import useDataFromCsv from './hooks/useDataFromCsv';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';


function App() {
    const matches = useDataFromCsv('matches');
    const players = useDataFromCsv('players');
    const records = useDataFromCsv('records');
    const teams = useDataFromCsv('teams');
    
    return (  
        <>
            <Header />

            <main>
                <Routes>
                    <Route path='/' element={<Home matches={matches} teams={teams} />} />
                </Routes>
            </main>

            <Footer />
        </>
    );
}

export default App;
