import * as dotenv from 'dotenv'
import feathers from '@feathersjs/feathers'
import '@feathersjs/transport-commons'
import express from '@feathersjs/express'

import NeDB from 'nedb'
import createService from 'feathers-nedb'

import hooks from './hooks'

// General Setup

dotenv.config()

if(!process.env.PORT){
  console.error('No port found in .env')
  process.exit(1)
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const dbStories = new NeDB({
  filename: './db/stories',
  autoload: true,
})

const serviceStories = createService({
  Model: dbStories,
  id: 'id',
})

const app = express(feathers());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// REST API
app.configure(express.rest());

// Services registration
app.use('/stories', serviceStories)
const service = app.service('stories')
service.hooks(hooks.story)
//service.hooks({before: { create: [ doNothing ] } })

// Express midlleware / Neat error handler
app.use(express.errorHandler());

// Start the server
app.listen(PORT).on('listening', () =>
  console.log(`Feathers server listening on localhost:${PORT}`)
);

