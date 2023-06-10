const request = require("request");
const fs = require('fs');

const url = 'https://api.thecatapi.com/v1/breeds/search?q=sib';
const fetchBreedDescription = (breedName, callback)=> {
  request(url, (error, response, body) => {
    if (error) {
      console.error('Request failed:', error);
      return;
    }
    const data = JSON.parse(body);
    console.log(data[0].description);
    // console.log(typeof data);
  });
}
module.exports = {fetchBreedDescription}; 