const Desenvolvedor = require('../models/Desenvolvedor');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(req, res) {
        //buscar todos devs num raio 10km
        //filtrar por tecnologias
        const { latitude, longitude, techs } = req.query;
        let techsArray = parseStringAsArray(techs);

        const devs = await Desenvolvedor.find({
            techs: {
                $in: techsArray
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                }
            }
        });

        return res.json({ devs })
    }
}