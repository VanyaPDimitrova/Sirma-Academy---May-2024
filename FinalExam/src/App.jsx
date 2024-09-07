import { useState } from 'react';
import './App.css';
import { TOURNAMENT } from './common/tournament';

const csvFile = {
  matches: 'matches',
  players: 'players',
  records: 'records',
  teams: 'teams',
};

function App() {
  const [text, setText] = useState('');

  const load = function(data) {
    fetch(`./data/${data}.csv`)
    .then(res => res.text())
    .then(data => setText(data)) 
  };

  const data = text.split('\n').map(row => row.slice(0, -1).split(','));
  const dataLastRow = data[data.length - 1];

  if (dataLastRow.length == 1 && dataLastRow[0] == '') {
    data.pop();
  }

  console.log(data);

  return (  
    <>
      <h1>{TOURNAMENT}</h1>

      <button onClick={() => load(csvFile.teams)}>load</button>
      <pre>{text}</pre>
    </>
  );
}

export default App;
