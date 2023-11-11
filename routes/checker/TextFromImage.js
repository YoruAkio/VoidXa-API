module.exports = {
    name: 'TextFromImage',
    description: 'Get text from image',
    type: 'application/json',
    /**
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     * @returns {Promise<void>}
     */
    run: async (req, res) => {
        const image = req.query.image;

        const textFromImage = require('text-from-image');
        const result = await textFromImage(image);

        res.json({
            code: res.statusCode,
            message: result,
        });
    },
};
