const data = require('../public/bios/donald_duck');

// Define the routes for the professional controller
const professionalRoute = (req, res) => {
  res.send(data);
};

module.exports = { professionalRoute };