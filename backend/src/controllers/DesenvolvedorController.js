const axios = require('axios');
const Desenvolvedor = require('../models/Desenvolvedor');
const parseStringAsArray = require('../utils/parseStringAsArray');

//index, show, store, update, destroy
module.exports = {
    async store(req, res) {
        const { github_username, techs, latitude, longitude } = req.body;

        let dev = await Desenvolvedor.findOne({ github_username });

        if (!dev) {
            const response = await axios.get(`https://api.github.com/users/${github_username}`);

            let { name = login, avatar_url, bio } = response.data;
            let techsArray = parseStringAsArray(techs);

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }

            dev = await Desenvolvedor.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            });
        }

        return res.json(dev);
    },

    async index(req, res) {
        const devs = await Desenvolvedor.find();
        return res.json(devs);
    }
}