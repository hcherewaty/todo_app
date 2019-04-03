'use strict';

const mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/todo-api');

mongoose.Promise = Promise;

//exports Todo model 
module.exports.Todo = require('./todo');