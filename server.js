const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();



mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/sem2", ).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Error...', err);
    process.exit();
});

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({"message": "Server is running :D"});
});

let PORT = 8080
require('./routes/routes.js')(app);
require('./routes/routeUSer.js')(app);


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
