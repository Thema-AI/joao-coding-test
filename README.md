# Frontend coding test

## Backround

This repo contains a web application that displays a list of products.

You'll find a next.js application that uses shadcn/ui for displaying the list.

We've used well known tooling to help you navigate the task and you'll find instructions on how to run the api and the web application on the readme's inside each app.

## Task

Your task is to add a search input to the page to allow the users to search for products.

To achieve that you should:
- Add an input to the page and integrate it with the api (https://dummyjson.com/)
- Implement functionality that will prevent the app from hitting the API every time the user types a letter. (debounce)

## Timing: Goals and Non-Goals

This task has an allotted time of 2 hours with some time reserved to discuss things together at the end.

Whilst everything can be completed in the time available, we're more interested in:

- how do you work in a brand new but established codebase?
- can we work together effectively?
- can you motivate decisions you make?
- can you prioritise in the face of of quite a complicated task?

One of us will be on the call at all times, normally on mute and getting on with other work. You should feel free to reach out if you want to discuss something (or show anything); you might want to pair on some aspects, or you might want to get on with it in peace.


## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## shadcn/ui

We've installed shadcn/ui for easily adding new ui components:

```bash
  pnpm dlx shadcn@latest add alert
```
