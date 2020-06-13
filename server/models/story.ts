const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const StorySchema = new Schema({
    content: 'string',
    date: 'number',
    handle: 'string',
    isPositiveExperience: 'boolean'
});

const StoryModel = model('Story', StorySchema);

export default StoryModel;
