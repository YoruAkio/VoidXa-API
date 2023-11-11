const fetch = require('node-fetch');

fetch(
    'http://127.0.0.1:3000/converter/imageconverter?image=https://raw.githubusercontent.com/iamcal/emoji-data/master/img-apple-64/1f600.png&convertTo=png',
).then(res => {
    console.log(res);

    // download the blob and save it into an image file
    const fs = require('fs');
    const buffer = fs.readFileSync('output.webp');
    console.log(buffer);

    // then convert buffer to asd.webp
    fs.writeFileSync('asdqwe.webp', buffer);
});
