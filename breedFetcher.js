const request = require("request");
const fs = require('fs');

const url = 'https://api.thecatapi.com/v1/breeds/search?q=';

const fetchBreedDescription = (breedName, callback)=> {
  request(url+breedName, (error, response, body) => {
    if (error) {
      // (error, description)
      callback(error, null);  
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      return callback(null, "Please enter a breed name after the filename");
    }
    callback(null, data[0].description);
    return
  });
}
module.exports = {fetchBreedDescription}; 