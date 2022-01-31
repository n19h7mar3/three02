// Imports
const morgan = require('morgan');
const express = require('express');

// Initialize express app
const app = express();
app.set('trust proxy', true);

// Define middlewares
app.use(express.json());
app.use(morgan('combined'));

// Define static, restful and admin routes
app.use('/static', express.static('/app/static'));
app.use('/restful/rewrites', require('./restful.js'));
app.get('/admin', (req, res) => { res.sendFile('/app/static/index.html') });

// Route handler for rewrites
app.get('/watch', (req, res) => {
    // TODO: handle rewrite
    res.end("to be implemented");
});

// All valid routes exhausted; respond with a 404
app.use((req, res) => {
    res.status(404).sendFile(__dirname + '/NotFound.html');
});

app.listen(80);