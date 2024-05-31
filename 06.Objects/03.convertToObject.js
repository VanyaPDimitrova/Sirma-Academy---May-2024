function convertToObject(json) {
  const obj = JSON.parse(json);
  
  for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
  }
}

convertToObject('{"name": "Ivan", "age": 40, "town": "Sofia"}');
convertToObject('{"firstName": "Ivan", "lastName": "Ivanov"}');
