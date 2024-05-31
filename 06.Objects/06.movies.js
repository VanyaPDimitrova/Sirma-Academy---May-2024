function movies(commands) {
  const movies = [];

  for (const command of commands) {
    const commandArr = command.split(' ');

    if (commandArr.includes('addMovie')) {
      const movieName = command.split('addMovie ');

      const hasMovie = false;
      for (const movie of movies) {
        if (movie.name == movieName) {
          hasMovie = true;
        }
      }

      if (!hasMovie) {
        movies.push({name: movieName[1]});
      }

    } else if (commandArr.includes('directedBy')) {
      const [movieName, director] = command.split(' directedBy ');
      
      for (const movie of movies) {
        if (movie.name == movieName) {
          movie['director'] = director;
        }
      }

    } else if (commandArr.includes('onDate')) {
      const [movieName, date] = command.split(' onDate ');

      for (const movie of movies) {
        if (movie.name == movieName) {
          movie['date'] = date;
        }
      }
    }
  }

  for (const movie of movies) {
    if (movie.name && movie.director && movie.date) {
      console.log(JSON.stringify(movie));
    }
  }
}

console.log(movies([
  'addMovie Fast and Furious',
  'addMovie Godfather',
  'Inception directedBy Christopher Nolan',
  'Godfather directedBy Francis Ford Coppola',
  'Godfather onDate 29.07.2018',
  'Fast and Furious onDate 30.07.2018',
  ' Spinderman 2 onDate 01.08.2018',
  'Fast and Furious directedBy Rob Cohen'
  ]));
console.log(movies([
  'addMovie The Avengers',
  'addMovie Spiderman',
  'The Avengers directedBy Pesho Peshov',
  'The Avengers onDate 30.07.2010',
  'Captain America onDate 30.07.2010',
  'Captain America directedBy Joe Russo',
  'The Avengers directedBy Anthony Russo',
  ]));