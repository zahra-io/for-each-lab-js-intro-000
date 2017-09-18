function iterativeLog(array) {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`)
  })
};

function iterate(callback) {
  var artists = ["Klimt", "Picasso", "Dali"];

  artists.forEach(callback => {
    return artists;
  });
};
