module.exports = {
    name: 'EncBinary',
    description: 'Encode text to binary',
    type: 'application/json',
    /**
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     * @returns {Promise<void>}
     */
    run: async (req, res) => {
        const textRaw = req.query.text;

        if (textRaw.match(/[^\w\s]/g)) {
            res.json({
                code: 400,
                message: 'Text must be only alphanumeric and space',
            });
            return;
        }

        const text = {
            each: {},
            combined: '',
        };

        for (let i = 0; i < textRaw.length; i++) {
            const charCode = textRaw.charCodeAt(i);
            const binary = charCode.toString(2);

            text.each[i] = binary;
            text.combined += `${binary} `;
        }

        res.json({
            code: res.statusCode,
            message: text,
        });
    },
};
