const fs = require('fs');

module.exports = {
    name: 'ImageConverter',
    description: 'Convert image to another image type',
    type: 'application/json',
    /**
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     * @returns {Promise<void>}
     */
    run: async (req, res) => {
        const image = req.query.image;
        const convertTo = req.query.convertTo;
        if (image === undefined)
            return res.json({
                code: 400,
                message: 'You are not specify the image!',
            });
        if (convertTo === undefined)
            return res.json({
                code: 400,
                message: 'You are not specify the convertTo!',
            });

        console.log(convertTo.toLowerCase());

        const convertType = {
            webp: [
                '-c:v libwebp',
                '-lossless 1',
                '-compression_level 6',
                '-q:v 0',
            ],
            png: ['-c:v png', '-q:v 0'],
            jpg: ['-c:v libjpeg', '-q:v 0'],
            bmp: ['-c:v bmp', '-q:v 0'],
        };

        function convertImage(image, convertTo) {
            const ffmpeg = require('fluent-ffmpeg');
            const filePath = `assets/cache/output/${Math.floor(
                Math.random() * 10000,
            )}_OutputFfmpeg.${convertTo.toLowerCase()}`;
            const outputFilePath = `assets/cache/output/converted/${Math.floor(
                Math.random() * 10000,
            )}_ConvertedImage.${convertTo.toLowerCase()}`;

            fs.writeFileSync(filePath, image);

            ffmpeg(image)
                .outputOptions(convertType[convertTo.toLowerCase()])
                .save(outputFilePath)
                .on('end', () => {
                    const fs = require('fs');
                    const buffer = fs.readFileSync(outputFilePath);
                    console.log(buffer);

                    const base64 = buffer.toString('base64');
                    console.log(base64);

                    res.json({
                        code: 200,
                        message: "Success, You need to convert base64 to image!",
                        image: base64,
                    });
                });
        }

        if (convertTo === undefined) {
            res.json({
                code: 400,
                message: 'You are not specify the convertTo!',
            });
        } else if (convertTo.toLowerCase() === 'png') {
            convertImage(image, convertTo);
        } else if (convertTo.toLowerCase() === 'webp') {
            convertImage(image, convertTo);
        } else if (convertTo.toLowerCase() === 'jpg') {
            convertImage(image, convertTo);
        } else if (convertTo.toLowerCase() === 'bmp') {
            convertImage(image, convertTo);
        } else {
            res.json({
                code: 400,
                message:
                    'File type that we support is only png, webp, jpg, bmp!',
            });
        }
    },
};
