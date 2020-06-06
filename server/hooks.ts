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

const log = async(context: HookContext) => {
  //console.log(context)
  return context
}

const pouet = async(context: HookContext) => {
  console.log(Object.keys(context))
  return context
}


const highlightHook = {
  before: {
    all: [log],
    find: [pouet],
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