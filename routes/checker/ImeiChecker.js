module.exports = {
    name: 'ImeiChecker',
    description: 'Check IMEI validity',
    type: 'application/json',
    /**
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     * @returns {Promise<void>}
     */
    run: async (req, res) => {
        const imei = req.query.imei;
        const nodeImei = require('node-imei');
        var checker = new nodeImei();
        var result = checker.isValid(imei);

        res.json({
            code: res.statusCode,
            message: result ? 'Your IMEI is valid' : 'Your IMEI is invalid',
        });
    },
};
