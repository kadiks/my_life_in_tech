"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;
const CommentSchema = new Schema({
    storyId: 'string',
    comment: 'string',
    date: 'number'
});
const CommentModel = model('Comment', CommentSchema);
exports.default = CommentModel;
