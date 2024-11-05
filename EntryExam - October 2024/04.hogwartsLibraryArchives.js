function hogwartsLibraryArchives(records, searchTerm) {
  let result = '';
  let firstOccurrence = -1;
  let lastOccurrence = -1;

  for (let i = 0; i < records.length; i++) {
    let record = records[i];

    if (record == searchTerm) {
      if (firstOccurrence == -1) {
        firstOccurrence = i;
        lastOccurrence = i;
      } else {
        lastOccurrence = i;
      }
    }
  }

  if (firstOccurrence == -1) {
    result = 'Record not found';
  } else {
    result = `First Occurrence: ${firstOccurrence}\nLast Occurrence: ${lastOccurrence}`;
  }

  console.log(result);
  console.log('----');
  
}

hogwartsLibraryArchives(["Harry", "Hermione", "Harry", "Ron"], "Harry");
hogwartsLibraryArchives(["Ginny", "Luna", "Neville", "Ginny"], "Ginny");
hogwartsLibraryArchives(["Ron", "Hermione", "Luna"], "Dumbledore");
hogwartsLibraryArchives(["Dobby", "Ron", "Hermione", "Harry"], "Harry");
hogwartsLibraryArchives(["Ginny", "Ron", "Ginny", "Ginny", "Harry"], "Ginny");
hogwartsLibraryArchives(["Hermione"], "Hermione");
hogwartsLibraryArchives([], "Ron");
