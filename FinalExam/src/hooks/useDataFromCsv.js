import { useEffect, useState } from "react";
import { csvFiles } from '../common/tournament';

function useDataFromCsv() {
    const [data, setData] = useState({});

    useEffect(() => {
        (function() {
            for (const fileName of csvFiles) {            
                fetch(`./data/${fileName}.csv`)
                .then(res => res.text())
                .then(result => {
                    const fileData = result.split('\n').map(row => row.slice(0, -1).split(','));
                    const dataLastRow = fileData[fileData.length - 1];
                
                    if (dataLastRow.length == 1 && dataLastRow[0] == '') {
                        fileData.pop();
                    }
                    
                    setData(data => {
                        return {
                            ...data,
                            [fileName]: fileData,
                        }
                    });
                })
                .catch(err => console.log(err));
            }         
        })();      
    }, []);
  
    return data;
};

export default useDataFromCsv;
