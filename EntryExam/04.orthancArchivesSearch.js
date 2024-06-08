function orthancArchivesSearch(records, searchTerm) {
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
}

orthancArchivesSearch(["Frodo", "Sam", "Frodo", "Merry"], "Frodo");
orthancArchivesSearch(["Pippin", "Merry", "Sam", "Pippin"], "Pippin");
orthancArchivesSearch(["Aragorn", "Legolas", "Gimli"], "Boromir");
orthancArchivesSearch(["Gandalf", "Sam", "Aragorn", "Frodo"], "Frodo");
orthancArchivesSearch(["Gandalf", "Sam", "Gandalf", "Gandalf", "Frodo"], "Gandalf");
orthancArchivesSearch(["Frodo"], "Frodo");
orthancArchivesSearch([], "Frodo");
