import { HookContext } from '@feathersjs/feathers'

const createdAt = async(context: HookContext) => {
  context.data.date = Date.now()
  return context
}

const filterHandle = async(context: HookContext) => {
  if(!context.data.handle){
    context.data.handle = 'Anonyme'
  }
  return context
}

const storyHook = {
  before: {
    create: [ createdAt ]
  }
}

export default {
  story: storyHook
}