const express = require('express');
const app = express();
const port = 2000; 

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/homepage.html');
});

app.get('/about-us', (req, res) => {
  res.sendFile(__dirname + '/public/aboutus.html');
});

app.get('/contact-us', (req, res) => {
    res.sendFile(__dirname + '/public/contactus.html');
  });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
