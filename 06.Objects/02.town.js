function town(obj) {
  const townName = `name -> ${obj.name}`;
  const townPopulation = `population -> ${obj.population}`;
  const townCountry = `country -> ${obj.country}`;
  const townPostcode = `postcode -> ${obj.postcode}`;

  return `${townName}\n${townPopulation}\n${townCountry}\n${townPostcode}`;
}

console.log(town({
                  name: 'Sofia',
                  population: 1234567,
                  country: 'Bulgaria',
                  postcode: '1000'
                 }));