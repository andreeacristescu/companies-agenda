const express = require('express');
const cors = require('cors');
const app = express();
const apiRoutes = require('./app/routes/api');
const bodyParser = require('body-parser');
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url);

mongoose.connection.on('error', function() {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

mongoose.connection.once('open', function() {
    console.log("Successfully connected to the database");
});

app.use(cors());

app.use('/api', apiRoutes);

app.get('*', (req, res) => res.send('Those are not the droids you are looking for!'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
