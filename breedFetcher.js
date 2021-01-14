const { fetchBreedDescription } = require('../breedFetcher');

const fetchBreedDescription = function(breed, error, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, body) => {
    if (error) {
      callback(error);
    }
    let data = JSON.parse(body);
    if (!data[0] || data[0].name !== breed) {
      callback( breed + " cannot be found");
    } else {
      callback(null ,data[0].description);
    }
  });
};

module.exports = {fetchBreedDescription};