const express = require('express');
const router = express.Router();

const config = require('./config');

router.get('/login', (req, res) => {
  const redirectUri = encodeURIComponent(config.oauthRedirectURI);
  const loginUrl = `https://login.salesforce.com/services/oauth2/authorize?response_type=token&client_id=${config.oauthConsumerKey}&redirect_uri=${redirectUri}`;

  res.redirect(loginUrl);
});

module.exports = router;
