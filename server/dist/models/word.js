"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;
const WordSchema = new Schema({
    word: 'string',
});
const WordModel = model('Word', WordSchema);
exports.default = WordModel;
