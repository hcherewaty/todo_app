'use strict';

const mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.connect(process.env.MONGODB_URI);

mongoose.Promise = Promise;

//exports Todo model 
module.exports.Todo = require('./todo');