import * as dotenv from 'dotenv';
import feathers from '@feathersjs/feathers';
import '@feathersjs/transport-commons';
import express from '@feathersjs/express';

const mongoose = require('mongoose');
const service = require('feathers-mongoose');

import StoryModel from './models/story';
import WordModel from './models/word';
import ReactionModel from './models/reaction';
import CommentModel from './models/comment';

mongoose.Promise = global.Promise;

import NeDB from 'nedb';
import createService from 'feathers-nedb';

import hooks from './hooks';
import services from './services';

import cors from 'cors';

// Environment Variables Get, Check & Assign

dotenv.config();

[ 'PORT', 'DBNAME', 'DBUSER', 'DBPSWD' ].forEach( envKey => {
    if(!process.env[envKey]){
	console.log(`No ${envKey} in .env`);
	process.exit(1);
    }
})

// DB Connect

const PORT: number = parseInt(process.env.PORT as string, 10);
const { DBNAME, DBUSER, DBPSWD } = process.env;

const dburi = `mongodb+srv://${DBUSER}:${DBPSWD}@cluster0-ofiq6.mongodb.net/${DBNAME}?retryWrites=true&w=majority`
const dbConnectOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(dburi, dbConnectOptions);


const app = express(feathers());

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// STATIC FOLDER
app.use('/', express.static('public'));

// REST API
app.configure(express.rest());

// Services registration
//   Stories
app.use('/stories/highlighted', service({ Model: StoryModel }));
app.service('stories/highlighted').hooks(hooks.highlighted);
app.use('/stories', service({ Model: StoryModel }));
app.service('stories').hooks(hooks.story);
// Whitelist
app.use('/whitelist', service({ Model: WordModel }));
// Reaction Count
app.use('/stories/:storyId/reactions/count', service({ Model: ReactionModel }));
app.service('stories/:storyId/reactions/count').hooks(hooks.reactionsCount);
//  Reaction
app.use('/stories/:storyId/reactions', service({ Model: ReactionModel }));
app.service('stories/:storyId/reactions').hooks(hooks.reactions);
// Comments
app.use('/stories/:storyId/comments', service({ Model: CommentModel }));
app.service('stories/:storyId/comments').hooks(hooks.comments);
// Express midlleware / Neat error handler
app.use(express.errorHandler());


// Start the server

const server = app
.listen(PORT)
.on('listening', () =>
    console.log(`Feathers server listening on localhost:${PORT}`)
);

type ModuleId = string | number;

interface WebpackHotModule {
  hot?: {
    data: any;
    accept(
      dependencies: string[],
      callback?: (updatedDependencies: ModuleId[]) => void
    ): void;
    accept(dependency: string, callback?: () => void): void;
    accept(errHandler?: (err: Error) => void): void;
    dispose(callback: (data: any) => void): void;
  };
}

declare const module: WebpackHotModule;

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => server.close());
}
