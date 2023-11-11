module.exports = {
    name: 'CCChecker',
    description: 'Check Credit Card validity',
    type: 'application/json',
    /**
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     * @returns {Promise<void>}
     */
    run: async (req, res) => {
        const cc = req.query.cc;
        const ccChecker = require('card-validator');
        const result = ccChecker.number(cc);

        res.json({
            code: res.statusCode,
            message: result.isValid ? 'Your CC is valid' : 'Your CC is invalid',
            info: result,
        });
    },
};
