import createService from 'feathers-nedb'
import NeDB from 'nedb'

const storiesDB = new NeDB({
  filename: './db/stories',
  autoload: true,
})

const reactionsDB = new NeDB({
  filename: './db/reactions',
  autoload: true,
})

const whitelistDB = new NeDB({
  filename: './db/whitelist',
  autoload: true,
})


const storiesService = createService({
  Model: storiesDB,
})

const highlightedService = createService({
  Model: storiesDB,
})

const reactionService = createService({
  Model: reactionsDB,
})

const whitelistService = createService({
  Model: whitelistDB,
})

export default {
  stories: storiesService,
  highlighted: highlightedService,
  reactions: reactionService,
  whitelist: whitelistService,
}
