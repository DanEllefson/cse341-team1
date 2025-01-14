// Import the necessary modules
const routes = require('express').Router();
const professionalController = require('../controllers/professional');

// Define routes
routes.get('/professional', professionalController.professionalRoute);

module.exports = routes;