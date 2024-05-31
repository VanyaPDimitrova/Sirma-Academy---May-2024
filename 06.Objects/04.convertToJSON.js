function convertToJSON(name, lastName, eyeColor) {
  const obj = {
    name, 
    lastName, 
    eyeColor
  };

  const objToJSON = JSON.stringify(obj);

  return objToJSON;
}

console.log(convertToJSON("Ivan", "Ivanov", "blue"));
console.log(convertToJSON("Maria", "Petrova", "brown"));