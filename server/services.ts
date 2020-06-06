import createService from 'feathers-nedb'
import NeDB from 'nedb'

const storiesDB = new NeDB({
  filename: './db/stories',
  autoload: true,
})

const storiesService = createService({
  Model: storiesDB,
})

const highlightedService = createService({
  Model: storiesDB,
})

export default {
  stories: storiesService,
  highlighted: highlightedService
}