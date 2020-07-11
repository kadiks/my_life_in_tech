"use strict";
exports.__esModule = true;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var model = mongoose.model;
var ReactionSchema = new Schema({
    storyId: 'string',
    reaction: 'string',
    date: 'number'
});
var ReactionModel = model('Reaction', ReactionSchema);
exports["default"] = ReactionModel;
