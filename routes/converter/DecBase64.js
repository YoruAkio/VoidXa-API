module.exports = {
    name: 'DecBase64',
    description: 'Decode base64 to text',
    type: 'application/json',
    /**
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     * @returns {Promise<void>}
     */
    run: async (req, res) => {
        const textRaw = req.query.text;
        const buff = Buffer.from(textRaw, 'base64');
        const text = buff.toString('ascii');
        res.json({
            code: res.statusCode,
            message: text,
        });
    },
};
