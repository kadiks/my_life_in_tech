"use strict";
exports.__esModule = true;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var model = mongoose.model;
var WordSchema = new Schema({
    word: 'string'
});
var WordModel = model('Word', WordSchema);
exports["default"] = WordModel;
