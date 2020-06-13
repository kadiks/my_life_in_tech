const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const StorySchema = new Schema({
    content: 'string',
    date: 'number',
    handle: 'string',
    isPositiveExperience: 'boolean'
});

StorySchema.set('toJSON', { virtuals: true });
StorySchema.set('toObject', { virtuals: true });

const StoryModel = model('Story', StorySchema);

export default StoryModel;
