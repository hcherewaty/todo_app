'use strict';

require('dotenv').config();

const express = require('express'),
      port = process.env.PORT,
      app = express(),
      bodyParser = require('body-parser');


const todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(express.static(__dirname + '/views'));

app.get('/', (req, res) => {
     res.sendFile('index.html');
});

app.use('/api/todos', todoRoutes);

app.listen(port, () => {
    console.log('App is up on port:', port);
});

