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


const storyHook = {
  before: {
    create: [ createdAt, filterHandle ],
  },
}

export default {
  story: storyHook
}