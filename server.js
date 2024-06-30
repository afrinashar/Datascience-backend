// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors());

 

// Endpoint to get data
app.get('/api/data', (req, res) => {
  res.json(data);
});

// Endpoint to add new data
app.post('/api/data', (req, res) => {
  const newData = req.body;
  newData.id = data.length + 1; // Simple ID generation
  data.push(newData);
  res.status(201).json(newData);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
