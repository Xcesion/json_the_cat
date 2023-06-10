const request = require("request");
const fs = require('fs');

const url = 'https://api.thecatapi.com/v1/breeds/search?q=';

const fetchBreedDescription = (breedName, callback)=> {
  request(url+breedName, (error, response, body) => {
    if (error) {
      callback('Request failed:');
      return;
    }
    const data = JSON.parse(body);
    console.log(data[0].description);
    if (data.length === 0) {
      return callback("Please enter a breed name after the filename");
    }
    callback(null, data[0].description);
    // console.log(typeof data);
  });
}
module.exports = {fetchBreedDescription}; 