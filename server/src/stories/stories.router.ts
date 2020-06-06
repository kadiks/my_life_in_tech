import express, { Request, Response } from "express";
import * as StoryService from "./stories.service";
import { Story } from "./story.interface";
import { Stories } from "./stories.interface";

// Router

export const storiesRouter = express.Router();

// Controller

// Get stories/

storiesRouter.get('/', async(req: Request, res: Response) => {
  try{
    const stories: Stories = await StoryService.findAll();

    res.status(200).send(stories);
  }catch(error){
    res.status(404).send(error.message);
  }
})