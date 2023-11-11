module.exports = {
    name: 'DecBinary',
    description: 'Decode binary to text',
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
            value: '',
        };

        const binaryArray = textRaw.split(' ');
        for (let i = 0; i < binaryArray.length; i++) {
            const charCode = parseInt(binaryArray[i], 2);
            text.value += String.fromCharCode(charCode);
        }

        res.json({
            code: res.statusCode,
            message: text,
        });
    },
};
