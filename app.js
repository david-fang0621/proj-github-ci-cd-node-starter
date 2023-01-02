const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/users', (req, res) => {
    const users = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
    ];

    res.json(users);
});

app.listen(3000, () => {
  console.log('API server listening on port 3000');
});

module.exports = app;