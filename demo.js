const fs = require('fs');

fs.readFile('elKing.txt', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data.toString());
});

fs.writeFile('elKing.txt', 'kingelkokabyasta', (err) => {
  if (err) {
    console.log('this is wrong');
  } else {
    console.log('Data completed');
  }
});
