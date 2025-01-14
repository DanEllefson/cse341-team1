// Import the necessary modules
const express = require('express');
const app = express();

// Set the port
const port = process.env.PORT || 8080;

// Mount the middleware. Routes/index.js will be called if the
// URL contains the domain name and a forward slash.
app.use('/', require('./routes'));

// Start the server
app.listen(port, () => { 
  console.log(`Server is running on port ${port}`);
});