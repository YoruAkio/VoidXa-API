module.exports = {
    name: 'EncHexCode',
    description: 'Encode text to hex code',
    type: 'application/json',
    /**
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     * @returns {Promise<void>}
     */
    run: async (req, res) => {
        const textRaw = req.query.text;
        const buff = Buffer.from(textRaw);
        const text = buff.toString('hex');
        res.json({
            code: res.statusCode,
            message: text,
        });
    },
};
