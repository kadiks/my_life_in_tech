# Quick start user guide for the API

- Add .env with PORT and DBUSER, DBNAME, DBPSWD

`PORT` is the HTTP port for the server. The others are for
mongo: `DBUSER` is the username, `DBPSWD` is the user's
password and `DBNAME` is the name of the database.

- run nodemon

## The routes are as follows

```
[GET | POST] /stories
[GET | DELETE] /stories/{storyId}
[GET] /stories/highlighted
[GET | POST] /stories/{storyId}/comments
[GET | POST] /stories/{sotryId}/reactions
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

`curl -d comment="mais prout quoi" http://<HOST>:<PORT>/stories/{storyId}/comments`

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
-`/stories` data is an array of story:
- /stories/highlighted returns 3 stories

### Reaction

- id : 'string'
- storyId: 'string',
- reaction: 'string',
- date: 'number'

### Comment

- id : 'string'
- storyId: 'string',
- comment: 'string',
- date: 'number'
