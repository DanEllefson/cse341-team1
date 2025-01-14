// Import the professional data
const data = require('../public/bios/donald_duck');

// Define the steps to take when the /professional route is requested
const professionalRoute = (req, res) => {
  res.send(data);
};

module.exports = { professionalRoute };