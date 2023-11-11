const fs = require('fs');

module.exports = function (app) {
    fs.readdirSync(__dirname).forEach(function (folder) {
        if (folder.substr(folder.lastIndexOf('.') + 1) !== 'js') {
            const folderPath = __dirname + '/' + folder;

            fs.readdirSync(folderPath).forEach(function (file) {
                if (
                    file === 'index.js' ||
                    file.substr(file.lastIndexOf('.') + 1) !== 'js'
                )
                    return;
                const name = file.name
                    ? file.name
                    : file.substr(0, file.indexOf('.'));
                const type = file.type ? file.type : 'application/json';
                const route = require(folderPath + '/' + file);
                console.log(`/${folder}/${name}`);

                app.get(`/${folder}/${name}`, async (req, res) => {
                    res.type(type);
                    await route.run(req, res);
                });

                app.post(`/${folder}/${name}`, async (req, res) => {
                    res.type(type);
                    await route.run(req, res);
                });
            });
        }
    });
};
