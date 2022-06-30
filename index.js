const express = require('express')
const cors = require('cors');
require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());







app.get('/', (req, res) => {
    res.send("Hello from ToDo List")
})

app.listen(port, () => {
    console.log('ToDo Listening port', port);
})