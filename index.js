const { fetchBreedDescription } = require('./breedFetcher');

let args = process.argv.slice(2);


fetchBreedDescription(args, (error, description)=>{
  if (error) {
    console.error('Error retrieving breed description:', error);
    return;
  }
  console.log(description);
});