const express = require('express');
const path = require('path');
const oauthRouter = require('./oauth');

const app = express();
const PORT = 3000;

// CORS Headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token, Authorization, X-Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader(
    'Access-Control-Expose-Headers',
    'X-Api-Version, X-Request-Id, X-Response-Time'
  );
  res.setHeader('Access-Control-Max-Age', '1000');
  next();
});

// Serve static files from /public
app.use(express.static(path.join(__dirname, 'public')));

// Use /oauth router
app.use('/oauth', oauthRouter);

// Route: index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route: oauthcallback.html
app.get('/oauthcallback.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'oauthcallback.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
