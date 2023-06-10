const { fetchBreedDescription } = require('./breedFetcher');

const args = process.argv.slice(2);
const breedName = process.argv[2];
if (args.length === 0) {
  console.log("Please enter a breed name after the filename");
  return;
}

fetchBreedDescription(breedName, (error, description)=>{
  if (error) {
    console.error('Error retrieving breed description:', error);
    return;
  }
  console.log(description);
});