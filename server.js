// Import the necessary modules
const express = require('express');
const cors = require('cors');
const app = express();

// Set the port
const port = process.env.PORT || 8080;

// Set up middleware for CORS to allow requests from all origins
app.use(cors());

// Mount the middleware. Routes/index.js will be called if the
// URL contains the domain name and a forward slash.
app.use('/', require('./routes'));

// Start the server
app.listen(port, () => { 
  console.log(`Server is running on port ${port}`);
});