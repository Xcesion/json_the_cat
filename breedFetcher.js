const request = require("request");
const fs = require('fs');
const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("Please enter a breed name after the filename");
  return;
}

const url = 'https://api.thecatapi.com/v1/breeds/search?q=sib';
const breedName = args[0];
const getBreedDescription = (breedName, callback)=> {
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


getBreedDescription(breedName, (error, description)=>{
  if (error) {
    console.error('Error retrieving breed description:', error);
    return;
  }
  console.log(description);
});

// https://api.thecatapi.com/v1/images/search?breed_id=beng


