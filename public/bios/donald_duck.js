// Load the file system module
const fs = require('fs');

// Locate the path to the image file
const imagePath = 'public/images/donald.jpg';

// Read the image file
const imageData = fs.readFileSync(imagePath);

// Convert the image data to Base64
const donaldBase64Image = imageData.toString('base64');

// Set up some fake professional data for Donald Duck
const data = {
  professionalName: 'Donald Duck',
  base64Image: donaldBase64Image,
  nameLink: { firstName: 'Donald:  ', url: 'https://en.wikipedia.org/wiki/Donald_Duck' },
  primaryDescription: 'A world-renowned web developer known for his innovative solutions and unique approach to problem-solving.',
  workDescription1: 'When he is not starring in animated films, Donald is developing numerous high-profile websites and applications, showcasing his expertise in front-end and back-end technologies.',
  workDescription2: 'He is a frequent speaker at tech conferences where he frequently, and comically, looses his temper. He has also authored several books on web development best practices which are widely regarded as must-reads for aspiring developers. Check out his best selling book, "Quack Your Way to Web Development Success".',
  linkTitleText: 'Check out more information at the following sites:',
  linkedInLink: { text: 'LinkedIn Profile', link: 'https://www.linkedin.com/in/donald-duck-webdev/' },
  githubLink: { text: 'GitHub Projects', link: 'https://github.com/donald-duck-webdev' },
};

module.exports = data;