import * as dotenv from 'dotenv'
import feathers from '@feathersjs/feathers'
import '@feathersjs/transport-commons'
import express from '@feathersjs/express'

import NeDB from 'nedb'
import createService from 'feathers-nedb'

import hooks from './hooks'
import services from './services'

import cors from 'cors'

// General Setup

dotenv.config()

if(!process.env.PORT){
  console.error('No port found in .env')
  process.exit(1)
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express(feathers());

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// REST API
app.configure(express.rest());

// Services registration
//   Stories
app.use('/stories/highlighted', services.highlighted)
app.use('/stories', services.stories)
app.service('stories').hooks(hooks.story)
app.service('stories/highlighted').hooks(hooks.highlighted)
// Whitelist
app.use('/whitelist', services.whitelist)
//  Reaction
app.use('/stories/:storieId/reactions', services.reactions)
app.service('stories/:storieId/reactions').hooks(hooks.reactions)
// Express midlleware / Neat error handler
app.use(express.errorHandler());

// Start the server
app.listen(PORT).on('listening', () =>
  console.log(`Feathers server listening on localhost:${PORT}`)
);

