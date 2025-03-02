const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const sheetRoutes = require('./routes/sheetRoutes'); // Import your routes

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('your-mongodb-connection-string', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use('/api', sheetRoutes); // Use your routes

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

