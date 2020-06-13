"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;
const ReactionSchema = new Schema({
    storyId: 'string',
    reaction: 'string',
    date: 'number'
});
const ReactionModel = model('Reaction', ReactionSchema);
exports.default = ReactionModel;
