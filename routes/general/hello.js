module.exports = {
    name: 'hello',
    method: 'get',
    type: 'application/json',
    run: async (req, res) => {
        res.json({
            message: 'Hello World!',
        });
    },
};
