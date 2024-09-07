import { useEffect, useState } from "react";

function useDataFromCsv(fileName) {
    const [text, setText] = useState('');

    useEffect(() => {
        const load = function(data) {
          fetch(`./data/${data}.csv`)
          .then(res => res.text())
          .then(data => setText(data)) 
        };

        load(fileName);

    }, [fileName]);
  
    const data = text.split('\n').map(row => row.slice(0, -1).split(','));
    const dataLastRow = data[data.length - 1];
  
    if (dataLastRow.length == 1 && dataLastRow[0] == '') {
      data.pop();
    }

    return data;
};

export default useDataFromCsv;
