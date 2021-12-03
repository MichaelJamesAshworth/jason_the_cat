const request = require('request');

const fetchBreedDescription = (breed, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, function(error, response, body) {
  if (error) {
    callback(error, null)
    return;
  }  
  const data = JSON.parse(body);
    if (data.length === 0) {
      callback("It looks like we couldn't find that breed. Sorry!");
    } else {
      callback(null, data[0].description);
    }
  });
};

module.exports = {fetchBreedDescription};
