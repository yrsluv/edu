# edu
 "scripts": {
    "start": "webpack serve --env port=3000",
    "build:prod": "webpack  --env mode=production",
    "build:dev": "webpack  --env mode=development",
    "lint:ts": "eslint \"**/*.{ts,tsx}\"",
    "lint:ts:fix": "eslint \"**/*.{ts,tsx}\" --fix",
    "lint:scss": "npx stylelint \"**/*.scss\"",
    "lint:scss:fix": "npx stylelint \"**/*.scss\" --fix",
    "test:unit": "jest --config ./config/jest/jest.config.ts",
    "test:ui": "npx loki test",
    "test:ui:ok": "npx loki approve",
    "test:ui:ci": "npx loki --requireReference --reactUri file:./storybook-static",
    "storybook": "start-storybook -p 6006 -c ./config/storybook",
    "storybook:build": "build-storybook -c ./config/storybook"
  }
