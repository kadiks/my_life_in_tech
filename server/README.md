# Quick start user guide for the API

## The routes are as follows

```
/stories
/story/:id
/stories/highlighted
```

## Return types

### All reponses are wrapped in:

```
{
  success: true | false,
  dat: object
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

### /story/:id return a unique story

### /stories/highlighted return 3 stories