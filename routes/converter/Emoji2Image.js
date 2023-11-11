const fetch = require('node-fetch');

module.exports = {
    name: 'Emoji2Image',
    description: 'Convert emoji to image',
    type: 'application/json',
    /**
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     * @returns {Promise<void>}
     */
    run: async (req, res) => {
        const emoji = req.query.emoji;
        const emojiCode = emoji.codePointAt(0).toString(16);
        const emojiImage = `https://raw.githubusercontent.com/iamcal/emoji-data/master/img-apple-64/${emojiCode}.png`;

        fetch(emojiImage).then(response => {
            if (response.status === 404) {
                res.json({
                    code: 404,
                    message:
                        'Emoji not found! or You are not specify the right emoji!',
                });
            } else {
                res.json({
                    code: res.statusCode,
                    message: emojiImage,
                });
            }
        });
    },
};
