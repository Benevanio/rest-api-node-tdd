const express = require('express');
const app = express();

app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/users', (req, res) => {
    res.json([
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' }
    ]);
});


app.post('/users', (req, res) => {
    const newUser = { id: 3, name: req.body.name };
    res.status(201).json(newUser);
});


module.exports = app;