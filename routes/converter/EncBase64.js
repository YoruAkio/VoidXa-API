module.exports = {
    name: 'EncBase64',
    description: 'Encode text to base64',
    type: 'application/json',
    /**
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     * @returns {Promise<void>}
     */
    run: async (req, res) => {
        const textRaw = req.query.text;
        const buff = Buffer.from(textRaw);
        const text = buff.toString('base64');
        res.json({
            code: res.statusCode,
            message: text,
        });
    },
};
