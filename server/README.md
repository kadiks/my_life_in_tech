# Quick start user guide for the API

Add .env with PORT and DBUSER, DBPSWD, DBNAME, DBNAME_DEV

-`PORT` is the HTTP port for the server.
-`DBUSER` is the db username
-`DBPSWD` is the db user password
-`DBNAME` is the name of the database.
-`DBNAME_DEV` is the name of the dev database.

- run nodemon

## The routes are as follows

```
[GET | POST] /stories
[GET | DELETE] /stories/{storyId}
[GET] /stories/highlighted
[GET | POST] /stories/{storyId}/comments
[GET | POST] /stories/{storyId}/reactions
[GET] /stories/{storyId}/reaction/count
```

## POST

- `/stories/`

Expects a body with
`{ content: string, handle: string, isPositiveExperience: boolean }`.
`handle` and `isPositiveExperience` are optional.

`curl -d content="J'ai mal au crâne" -d handle="petitPanda" -d isPositiveExperience=false http://<HOST>:<PORT>/stories/`

- `/stories/{storyId}/reactions/`

Expects a `storyId` in the path and a body with
`{ reaction: string }`

`curl -d comment="sob" http://<HOST>:<PORT>/stories/{storyId}/comments`

- `stories/{storyId}/comments/`

Expects a `storyId` in the path and a body with
`{ comment: string }`

`curl -d comment="mais prout quoi" http://<HOST>:<PORT>/stories/{storyId}/comments`

## GET

### Story

- _id: 'string'
- content: 'string'
- date: 'number'
- handle: 'string'
- isPositiveExperience: 'boolean'

- /story/:id returns a unique story
-`/stories` an array of story
- /stories/highlighted returns 3 stories

### Reaction

```
interface StoryReaction{
   _id: string,
    reaction: string,
    date: number,
    storyId: string,
    __v: number
}

```

### Reaction Count

```
interface ReactionCounts{
    [propName: string]: number,
}
```

### Comment

- id : 'string'
- storyId: 'string',
- comment: 'string',
- date: 'number'
