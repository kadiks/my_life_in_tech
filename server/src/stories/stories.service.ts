// Data model

import { Story } from './story.interface.ts';
import { Stories } from './stories.interface.ts';

// Fake Store

const stories: Stories = {
  '1': {
    id: '1',
    content: 'Bé i sont pas mignons chez Google et tout.',
    date: 1591438846803,
    handle: 'SuperTruc',
    isPositiveExperience: true,
  }
};

// Methods

export const findAll = async (): Promise<Stories> => {
  return stories;
};

export const find = async (id: number): Promise<Story> => {
  const maybeStory: Story = stories[id];
  
  if(maybeStory){ return maybeStory; }
  
  throw new Error("No Story Found");
};