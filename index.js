const breedName = process.argv[2];
const { fetchBreedDescription } = require('./breedFetcher');

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log(error);
  } else if (desc.length === 0) {
    console.log(`${breedName} breed is not found`);
    return;
  } else {
    console.log(desc);
  }
});