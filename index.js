
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/roast', (req, res) => {
  const username = req.query.username;
  const roasts = [
    `@${username}? More like @whyAreYouOnline.`,
    `@${username} is living proof autocorrect can't fix everything.`,
    `@${username}'s tweets are sponsored by bad decisions.`
  ];

  const roast = roasts[Math.floor(Math.random() * roasts.length)];
  res.send(`<h1>${roast}</h1><a href="/">Roast another</a>`);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});