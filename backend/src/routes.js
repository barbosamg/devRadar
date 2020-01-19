const { Router } = require('express');
const DesenvolvedorController = require('./controllers/DesenvolvedorController');
const SearchController = require('./controllers/SearchController');
const routes = Router();

routes.post('/devs', DesenvolvedorController.store);
routes.get('/devs', DesenvolvedorController.index);
routes.get('/search', SearchController.index);

module.exports = routes;
