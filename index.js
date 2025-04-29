const express = require('express');
const app = express();

const roastLines = [
    "{name}? Sounds like a bug in the system.",
    "When {name} enters the room, even Wi-Fi disconnects.",
    "{name}, you're the reason semicolons exist!",
    "{name}? You debug with Google Translate, don’t you?",
    "{name}, your code runs on vibes and errors."
];

app.get('/', (req, res) => {
    res.send('Welcome to Roast Machine! Try /roast?name=yourname');
});

app.get('/roast', (req, res) => {
    const name = req.query.name || "Someone";
    const random = Math.floor(Math.random() * roastLines.length);
    const roast = roastLines[random].replace('{name}', name);
    res.send(roast);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
