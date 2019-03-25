'use strict';

const express = require('express'),
      port = process.env.PORT || 3030,
      app = express();

app.get('/', (req, res) => {
     res.send('Hi there!  Server is alive!');
});

app.get('/happy', (req, res) => {
    res.send('😁👋💫');

});





app.listen(port, function() {
    console.log('App is up on port:', port);
});

