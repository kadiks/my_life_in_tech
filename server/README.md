# Quick start user guide for the API

- Add .env with PORT and DBUSER, DBPSWD, DBNAME, DBNAME_DEV
  - `PORT` is the HTTP port for the server.
  - `DBUSER` is the db username
  - `DBPSWD` is the db user password
  - `DBNAME` is the name of the database.
  - `DBNAME_DEV` is the name of the dev database.
- run nodemon

## The routes are as follows

```
POST | GET           /stories
       GET | DELETE  /stories/{storyId}
       GET           /stories/highlighted
POST | GET           /stories/{storyId}/comments
POST | GET           /stories/{storyId}/reactions
       GET           /stories/{storyId}/reaction/count
```

## Stories

### Endpoints

```
  POST /stories
   GET /stories
   GET /stories/{storyId}
DELETE /stories/{storyId} 
```

### `POST /stories`

#### Request body

```
interface PostComment{
  content: string,
  handle?: string,
  isPositiveExperience?: boolean
}
```

#### Response body

```
interface PostCommentRes{
  _id: string,
  content: string,
  handle?: string,
  isPositiveExperience?: string,
  date: number
}
```

#### In action

```
curl -d content="J'ai mal au crâne" -d handle="petitPanda" -d isPositiveExperience=false http://localhost:7000/stories/
```
=>
```
{
  "_id":"5ee5190c656a206711ee7bfb",
  "content":"J'ai mal au crâne",
  "handle":"petitPanda",
  "isPositiveExperience":false,
  "date":1592072460991,
  "__v":0
}
```

### GET /stories

#### Response body

```
interface PostCommentRes{
  _id: string,
  whitelist: array<string>,
  content: string,
  handle?: string,
  isPositiveExperience?: string,
  date: number
}
```

#### In action

```
curl http://localhost:7000/stories
```
=>
```
[
  {
    "whiteList":[],
    "_id":"5ee5190c656a206711ee7bfb",
    "content":"J'ai mal au crâne",
    "handle":"petitPanda",
    "isPositiveExperience":false,
    "date":1592072460991,"__v":0
  },
  {
    "whiteList":[],
    "_id":"5ee51923656a206711ee7bfc",
    "content":"Mon chef c'est un pabo",
    "handle":"jolieMenthe",
    "isPositiveExperience":false,
    "date":1592072483288,
    "__v":0
  },
  {
    "whiteList":[],
    "_id":"5ee51931656a206711ee7bfd",
    "content":"Trop bon le café",
    "handle":"MinnieWinnie",
    "isPositiveExperience":true,
    "date":1592072497419,
    "__v":0
  }
]
```

## Reactions

### Endpoints

```
POST /stories/{storyId}/reactions/
 GET /stories/{storyId}/reactions/
```

### `POST /stories/{storyId}/reactions/`

#### Request body

```
interface PostReaction{
  reaction: string,
}
```

#### Response body

```
interface PostReactionResponse{
  _id: string,
  reaction: string,
  date: number,
  storyId: string,
  __v:0
}
```

#### In action

```
curl -d reaction="happy" http://localhost:7000/stories/5ee51931656a206711ee7bfd/reactions
```
=>
```
{
  "_id":"5ee519a8656a206711ee7bfe",
  "reaction":"happy",
  "date":1592072616286,
  "storyId":"5ee51931656a206711ee7bfd",
  "__v":0
}
```


### Reaction Count

```
interface ReactionCounts{
    [propName: string]: number,
}
```

