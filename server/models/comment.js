"use strict";
exports.__esModule = true;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var model = mongoose.model;
var CommentSchema = new Schema({
    storyId: 'string',
    comment: 'string',
    date: 'number'
});
var CommentModel = model('Comment', CommentSchema);
exports["default"] = CommentModel;
