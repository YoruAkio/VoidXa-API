//  req = requests.get(f"https://api-matchid.watalks.com/app/dataku/Ktp?ssaid=384e5584128b93c7&nik_data={nikInput}&uuid=ea35be83-a485-4bf9-b9b4-42a8df699780&nama_data=&token_data=null&loc=31.24916%2C121.48789833333333&build=dev", headers={
//                 "Host": "api-matchid.watalks.com",
//                 "Build-Type": "release",
//                 "Key": "19505e6963b7e2e9f0dc6eab600a966b",
//                 "Authorization": "BearerTOKEN",
//                 "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 7.1.2; ASUS_Z01QD Build/N2G48H)",
//                 "Accept-Encoding": "gzip, deflate"
//             }).json()
//             data = json.loads(json.dumps(req))

// convert code above to javascript
module.exports = {
    name: 'NIKChecker',
    description: 'Check NIK Information',
    type: 'application/json',
    /**
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     * @returns {Promise<void>}
     */
    run: async (req, res) => {
        const nik = req.query.nik;

        const fetch = require('node-fetch');
        const result = await fetch(
            `https://api-matchid.watalks.com/app/dataku/Ktp?ssaid=384e5584128b93c7&nik_data=${nik}&uuid=ea35be83-a485-4bf9-b9b4-42a8df699780&nama_data=&token_data=null&loc=31.24916%2C121.48789833333333&build=dev`,
            {
                headers: {
                    Host: 'api-matchid.watalks.com',
                    'Build-Type': 'release',
                    Key: '19505e6963b7e2e9f0dc6eab600a966b',
                    Authorization: 'BearerTOKEN',
                    'User-Agent':
                        'Dalvik/2.1.0 (Linux; U; Android 7.1.2; ASUS_Z01QD Build/N2G48H)',
                    'Accept-Encoding': 'gzip, deflate',
                },
            },
        );
        const data = await result.json();
        res.json({
            code: res.statusCode,
            message: data,
        });
    },
};
