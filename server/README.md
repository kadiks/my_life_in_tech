# Quick start user guide for the API

- Add .env with PORT number
- run nodemon

## The routes are as follows

```
[GET | POST] /stories
[GET | DELETE] /stories/:id
[GET] /stories/highlighted
```

## Return types

### All reponses are wrapped in:

```
{
  success: true | false,
  data: object
}
```

### `/stories` data is an array of:

```
{
  "$schema": "http://json-schema.org/draft/2019-09/schema",
  "title": "Story",
  "type": "object",
  "required": ["id", "content", "date"],
  "properties": {
    "id": {
      "type": "string",
      "description": "Story identifier"
    },
    "content": {
      "type": "string",
      "description": "Content of story"
    },
    "date": {
      "type": "number",
      "description":
    },
    "handle": {
      "type": "string",
      "description": "Optional user handle"
    },
    "isPositiveExperience": {
      "type": "boolean",
      "description": "Optional emotional response good/bad"
    },
  }
}
```

### /story/:id returns a unique story

### /stories/highlighted returns 3 stories