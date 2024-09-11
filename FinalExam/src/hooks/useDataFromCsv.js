import { useEffect, useState } from "react";
import { csvFiles } from '../common/tournament';

function useDataFromCsv() {
    const [dataFromCsv, setDataFromCsv] = useState({});

    useEffect(() => {
        (function() {
            for (const fileName of csvFiles) {            
                fetch(`./data/${fileName}.csv`)
                .then(res => res.text())
                .then(result => {
                    const fileDataArrays = csvTextToArrayOfArrays(result);
                    
                    const fileDataObjects = arrayOfArraysToArrayOfObjects(fileDataArrays);
                    
                    setDataFromCsv(data => {
                        return {
                            ...data,
                            [fileName]: fileDataObjects,
                        }
                    });
                })
                .catch(err => console.log(err));
            }         
        })();      
    }, []);
  
    return dataFromCsv;
};

function csvTextToArrayOfArrays(csvText) {
    const arrayOfArrays = csvText.split('\n').map(row => row.split(','));
    const dataLastRow = arrayOfArrays[arrayOfArrays.length - 1];

    if (dataLastRow.length == 1 && dataLastRow[0] == '') {
        arrayOfArrays.pop();
    }

    return arrayOfArrays;
}

function arrayOfArraysToArrayOfObjects(arrayOfArrays) {
    const copyArrayOfArrays = arrayOfArrays.map(row => row.slice());
    const titles = copyArrayOfArrays.shift();

    const arrayOfObjects = copyArrayOfArrays.map((row) => {
        let objRow = {};
    
        for (let i = 0; i < titles.length; i++) {
            objRow = {
                ...objRow,
                [titles[i]]: row[i]
            }
        }
    
        return objRow;
    })

    return arrayOfObjects;
}

export default useDataFromCsv;
