const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const WordSchema = new Schema({
    word: 'string',
});

const WordModel = model('Word', WordSchema);

export default WordModel;
