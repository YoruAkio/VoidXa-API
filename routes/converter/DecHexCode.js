module.exports = {
    name: 'DecHexCode',
    description: 'Decode hex code to text',
    type: 'application/json',
    /**
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     * @returns {Promise<void>}
     */
    run: async (req, res) => {
        const textRaw = req.query.text;
        const buff = Buffer.from(textRaw, 'hex');
        const text = buff.toString('utf-8');
        res.json({
            code: res.statusCode,
            message: text,
        });
    },
};
