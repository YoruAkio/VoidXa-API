const fetch = require('node-fetch');

fetch(
    'http://127.0.0.1:3000/converter/imageconverter?image=https://raw.githubusercontent.com/iamcal/emoji-data/master/img-apple-64/1f600.png&convertTo=png',
).then(res => {
    console.log(res);

    res.json().then(json => {
        console.log(json);

        const fs = require('fs');

        // save base54 value to image file
        const buffer = Buffer.from(json.message, 'base64');
        fs.writeFileSync('asd-asdasdqwe.png', buffer);
    });


});

// const fluentFfmpeg = require('fluent-ffmpeg');
// const image =
//     'https://raw.githubusercontent.com/iamcal/emoji-data/master/img-apple-64/1f600.png';

// // download image

// const fs = require('fs');

// const convertTo = 'webp';

// const convertType = {
//     webp: ['-c:v libwebp', '-lossless 1', '-compression_level 6', '-q:v 0'],
//     png: ['-c:v png', '-q:v 0'],
//     jpg: ['-c:v libjpeg', '-q:v 0'],
//     bmp: ['-c:v bmp', '-q:v 0'],
// };

// function convertImage(image, convertTo) {
//     const filePath = `assets/cache/output/${Math.floor(
//         Math.random() * 10000,
//     )}_OutputFfmpeg.${convertTo.toLowerCase()}`;
//     const folderPath = `assets/cache/output/converted`;
//     fs.writeFileSync(filePath, image);
//     console.log(convertType[convertTo.toLowerCase()]);

//     fluentFfmpeg(image)
//         .outputOptions(convertType[convertTo.toLowerCase()])
//         .save(folderPath + '/Kio.' + convertTo.toLowerCase())
//         .on('end', () => {
//             const fs = require('fs');
//             const buffer = fs.readFileSync(filePath);
//             console.log(buffer);
//             fs.writeFileSync(
//                 `GraceAPI-Output.${convertTo.toLowerCase()}`,
//                 buffer,
//             );
//         });
// }

// convertImage(image, convertTo);

// // fluentFfmpeg(image)
// //     .outputOptions([
// //         '-c:v libwebp',
// //         '-lossless 1',
// //         '-compression_level 6',
// //         '-q:v 0',
// //     ])
// //     .save('output.webp')
// //     .on('end', () => {
// //         // return it into an buffer
// //         const fs = require('fs');
// //         const buffer = fs.readFileSync('output.webp');
// //         console.log(buffer);

// //         // then convert buffer to asd.webp
// //         fs.writeFileSync('asd.webp', buffer);
// //     });

// // // Encode Binary to text

// // // const text = 'Hello World!';
// // // for (let i = 0; i < text.length; i++) {
// // //     const binary = `0${text.charCodeAt(i).toString(2)}`;
// // //     console.log(binary);
// // // }

// // const binary = `
// // 01001000

// // 01100101

// // 01101100

// // 01101100

// // 01101111

// // 0100000

// // 01010111

// // 01101111

// // 01110010

// // 01101100

// // 01100100

// // 0100001`;

// // // decode binary to text
// // const binaryArray = binary.split('\n');
// // let text = '';
// // for (let i = 1; i < binaryArray.length - 1; i++) {
// //     const charCode = parseInt(binaryArray[i], 2);
// //     text += String.fromCharCode(charCode);
// // }
// // console.log(text);

// // // const fs = require('fs');

// // // fs.readdirSync(__dirname).forEach(function (folder) {
// // //     // if its a file / file with extension .js then return, else if its a folder then continue

// // //     if (folder.substr(folder.lastIndexOf('.') + 1) !== 'js') {
// // //         const folderPath = __dirname + '/' + folder;

// // //         fs.readdirSync(folderPath).forEach(function (file) {
// // //             if (
// // //                 file === 'index.js' ||
// // //                 file.substr(file.lastIndexOf('.') + 1) !== 'js'
// // //             )
// // //                 return;
// // //             const name = file.substr(0, file.indexOf('.'));
// // //             const route = require('./' + folder + '/' + name);

// // //             console.log(`/${folder}/${name}`);
// // //         });
// // //     }
// // // });

// // // // fs.readdirSync(__dirname).forEach(function (folder) {
// // // //     // if its a file / file with extension .js then return, else if its a folder then continue
// // // //     // scan all then file, if ends with .js then console.log it
// // // //     const folderPath = __dirname + '/' + folder;
// // // //     // console.log(folderPath);

// // // //     if (fs.lstatSync(folderPath).isFile()) {
// // // //         if (folder.substr(folder.lastIndexOf('.') + 1) !== 'js') return;
// // // //         const name = folder.substr(0, folder.indexOf('.'));
// // // //         const route = require('./' + name);

// // // //         console.log(`/${route.name}`);
// // // //         return;
// // // //     }
// // // //     // fs.readdirSync(__dirname + '/' + folder).forEach(function (file) {
// // // //     //     if (
// // // //     //         file === 'index.js' ||
// // // //     //         file.substr(file.lastIndexOf('.') + 1) !== 'js'
// // // //     //     )
// // // //     //         if (folder.substr(folder.lastIndexOf('.') + 1) !== 'js') return;

// // // //     //     return;
// // // //     //     const name = file.substr(0, file.indexOf('.'));
// // // //     //     const route = require('./' + folder + '/' + name);

// // // //     //     console.log(`/${route.name}`);
// // // //     // });
// // // // });
