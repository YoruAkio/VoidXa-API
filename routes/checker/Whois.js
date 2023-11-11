module.exports = {
    name: 'Whois',
    description: 'Whois Checker',
    type: 'application/json',
    /**
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     * @returns {Promise<void>}
     */
    run: async (req, res) => {
        const website = req.query.website;

        const whois = require('whoiser');
        const result = await whois(website);

        res.json({
            code: res.statusCode,
            message: result,
        });
    },
};
