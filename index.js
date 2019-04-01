'use strict';

require('dotenv').config();

const express = require('express'),
      port = process.env.PORT || 3030,
      app = express(),
      bodyParser = require('body-parser');


const todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
     res.send('Hello from the root route!');
});

app.use('/api/todos', todoRoutes);

app.listen(port, function() {
    console.log('App is up on port:', port);
});

