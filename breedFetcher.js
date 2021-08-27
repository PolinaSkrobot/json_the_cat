const request = require('request');




const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error,null);
    }
    
    const data = JSON.parse(body);
    const breed = data[0];
    if (breed) {
      callback(null, breed.description);
    } else {
      callback('Errr, breed is not found', null);
    }
    // callback(error, data[0].description);


    // if (error) {
    //   return console.error(error);
    // } else {
    //   const data = JSON.parse(body);
    //   //console.log(data);
    //   if (data.length === 0) {
    //     //console.log(data.length);
    //     console.log(`${breedName} breed is not found`);
    //     return;
    //   }
    //   console.log(data[0].description);
    // }
    
  });
};
module.exports = { fetchBreedDescription };