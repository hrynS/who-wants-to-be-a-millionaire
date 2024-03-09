# Game Questions Configuration Documentation

## Overview

This document details the organization and structure of the game questions configuration for "Who Wants to Be a Millionaire" in a JSON format. It explains how questions are categorized, retrieved, and presented within the game, highlighting the benefits of such a structured approach.

### Benefits of Current Configuration

Organizing the configuration as we have provides several key advantages:

- **Scalability**: By mapping levels to their respective questions, it becomes easy to add or remove levels without affecting other parts of the configuration.
- **Modularity**: Each question is an independent module, which simplifies editing and ensures changes in one question don't inadvertently impact others.
- **Readability**: This clear structure allows developers and content creators to easily understand and navigate through the configuration.
- **Maintainability**: It allows for easy updates and maintenance of the game's content, including rewards and correct answers.

### Complete Game Questions Configuration Example

```json
{
  "levels": {
    "1": {"reward": 500},
    "2": {"reward": 1000},
    // ...
  },
  "questions": {
    "1": {
      "level": 1,
      "question": "Which chemical element...",
      "answers": [{
        "option": "D",
        "text": "Last answer"
        } 
        // ...
      ],
      "correctAnswer": ["D"]
    }
    // ...
  }
}
```

## Details

### Levels Object

The `levels` object serves as a quick reference to determine the rewards associated with each level.
It is a separate object from questions list because this way we can store the levels settings and adjust them 
separately. Also we can add other fields apart from reward to customize the levels.

```
{
  "levelId": {"reward": Integer}
}
```
- **levelId**: `Integer`. Represents the level number in the game.
- **reward**: `Integer`. Specifies the monetary reward for correctly answering the given level's question.

### Questions Object

Each key in the `questions` object corresponds to a level, with detailed information about the question presented at that level.
Questions are structured as an object to be able to dynamically replace the questions for certain levels and access 
the questions easily.

```
{
  "levelId": {
    "level": Integer,
    "question": String,
    "answers": Array,
    "correctAnswer": Array
  }
}
```

- **level**: `Integer`. Echoes the level identifier, reinforcing the question's placement in the game.
- **question**: `String`. The actual question text presented to the player.
- **answers**: `Array`. An array of objects, each representing a possible answer choice.
- **correctAnswer**: `Array`. An array containing the correct answer identifier(s), linking directly to the 'option' field in answers.

### Answers Array

```
{
  {
    "option": String,
    "text": String,
  } 
}
```

- **option**: `String`. The letter or identifier of the answer option (e.g., "A", "B", "C", "D").
- **text**: `String`. The full text of the answer option presented to the player.

## Editing the Configuration

- Ensure the integrity of the JSON structure when adding or editing questions.
- Rewards should be updated within the `levels` object to maintain consistency with question difficulty.
- The `correctAnswer` field in the `questions` object must always correlate with the `option` value within the `answers` array for accuracy.
- Adjustments to level numbers must be reflected in both the `levels` and `questions` objects to keep the game progression logical and orderly.
