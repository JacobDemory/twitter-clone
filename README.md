# Social Feed Component Exercise

A small React and TypeScript frontend demonstrating reusable components, typed props, list rendering, conditional UI, and local interaction state.

This project originated as a React practice assignment. It is intentionally described as a client-side component exercise—not a full-stack Twitter implementation.

## Features

- Render typed post data through a reusable `Tweet` component
- Like and unlike individual posts
- Update like counts through component state
- Responsive feed layout
- Keyboard-accessible like controls

## Tech Stack

- React
- TypeScript
- Vite
- CSS

## Live Demo

[View the deployed component exercise](https://jacobdemory.github.io/twitter-clone/)

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Scope

The data is local and resets on refresh. This repository does not include authentication, an API, a database, posting, comments, or real social-network functionality.

## Future Improvements

- Persist reactions locally
- Add post composition and deletion
- Add component tests
- Replace mock data with a small documented API only if the project is intentionally expanded
