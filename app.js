const express = require("express");
const app = express();

const port = process.env.port || 3000;

app.route('').get((req, res) => {
    res.send('Hello')
});

app.route('/about').get((req, res) => {
    res.send('about page')
});

app.listen(port, () => {
    console.log('server is running on port', port)
});