import { HookContext } from '@feathersjs/feathers'

const createdAt = async(context: HookContext) => {
  context.data.date = Date.now()
  return context
}

const filterHandle = async(context: HookContext) => {
  if(!context.data.handle){
    context.data.handle = ''
  }
  return context
}

const pick = (xs: Array<Object>) => {
  const index = Math.floor(Math.random() * xs.length)
  return xs[index]
}

const randomStory = async(context: HookContext) => {
  context.result = [...new Array(3)].map(() => pick(context.result))
  return context
}

const error = async(context: HookContext) => {
  console.log(context.error)
  return context
}

const filterByStory = async(context: HookContext) => {
  return context
}


const addReactions = async(context: HookContext) => {
  console.log('adding reactions')
  return context
}


const highlightHook = {
  after: {
    find: [randomStory],
  },
  error: {
    all: [error],
  }
}

const storyHook = {
  before: {
    create: [ createdAt, filterHandle ],
    get: [ addReactions ]
  },
}

const reactionsHook = {
  before: {
    create: [ createdAt ],
    find: [ filterByStory ]
  }
}

export default {
  story: storyHook,
  highlighted: highlightHook,
  reactions: reactionsHook,
}