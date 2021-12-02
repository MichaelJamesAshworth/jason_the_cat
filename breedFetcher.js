const request = require('request');
const breed = process.argv[2];
request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, function(error, response, body) {
  const data = JSON.parse(body);
  if (data[0]) {
    console.log(data[0].description);
  } else {
    console.log("It looks like we couldn't find that breed. Sorry!");
    if (error) {
      console.error('error:', error); // Print the error if one occurred
    }
  }
});
