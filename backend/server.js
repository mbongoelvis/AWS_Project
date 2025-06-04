const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Example login endpoints
app.post('/auth/login', (req, res) => {
  const { email, password } = req.body;
  // Replace this with your real authentication logic
  if (email === 'test@gmail.com' && password === 'password123') {
    res.json({ name: 'Test User', email });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

app.post('/auth/company/login', (req, res) => {
  const { email, password } = req.body;
  // Replace this with your real authentication logic
  if (email === 'company@gmail.com' && password === 'company123') {
    res.json({ name: 'Test Company', email });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});