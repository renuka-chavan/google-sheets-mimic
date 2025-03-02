const express = require('express');
const router = express.Router();

// Example of a GET request
router.get('/data', (req, res) => {
    res.json({ message: 'This is your data from the backend!' });
});

// Example of a POST request
router.post('/data', (req, res) => {
    const data = req.body;
    // Process the data and save it to the database
    res.json({ message: 'Data received!', data });
});

module.exports = router;
