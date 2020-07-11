"use strict";
exports.__esModule = true;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var model = mongoose.model;
var StorySchema = new Schema({
    content: 'string',
    date: 'number',
    handle: 'string',
    isPositiveExperience: 'boolean'
});
var StoryModel = model('Story', StorySchema);
exports["default"] = StoryModel;
