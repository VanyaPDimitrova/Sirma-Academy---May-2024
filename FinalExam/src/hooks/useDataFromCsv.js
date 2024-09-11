import { useEffect, useState } from "react";

function useDataFromCsv(fileName) {
    const [dataFromCsv, setDataFromCsv] = useState([]);

    useEffect(() => {
        (function(fileName) {    
            fetch(`./data/${fileName}.csv`)
            .then(res => res.text())
            .then(result => {
                const fileDataArrays = csvTextToArrayOfArrays(result);                    
                const fileDataObjects = arrayOfArraysToArrayOfObjects(fileDataArrays);
                
                setDataFromCsv(fileDataObjects);
            })
            .catch(err => console.log(err));
                  
        })(fileName);      
    }, [fileName]);
  
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
