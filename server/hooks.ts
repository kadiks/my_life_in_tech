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


const highlightHook = {
  after: {
    find: [randomStory],
  },
}

const storyHook = {
  before: {
    create: [ createdAt, filterHandle ],
  },
}

export default {
  story: storyHook,
  highlighted: highlightHook
}