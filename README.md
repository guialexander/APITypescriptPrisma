# Make It Real - API-Typescript-Prisma

This is a solution to the creation of API with typescript and prisma project of the Make It Real course.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview :

-The first api is created with Typescript where we can make different requests through espress() and prism, (CRUD).

### The challenge

-It was a good challenge, where we handled the CRUD requests, with the help of express and we connected to the page we need with router, with prism we created the schema,

it was divided into different folders to have a code easier to adjust and reuse.

### Screenshot

![]()

## My process

### Built with

-Typescript
-prisma
-express
-javascript
-cors()
-express.json()

### What I learned

create api, we create a backend database, we manage render as a server that communicates our database with each other,  
we leave an example of the code:

```js
import { Router } from "express";

import {
  createReviewHandler,
  deleteReviewHandler,
  getAllReviewsHandler,
  getReviewHandler,
  updateReviewHandler,
} from "./reviews.controller";

const router = Router();

// /api/users -> GET
router.get("/", getAllReviewsHandler);

// /api/users -> POST
router.post("/", createReviewHandler);

// /api/users/:id -> GET
router.get("/:id", getReviewHandler);

// /api/users/:id -> DELETE
router.delete("/:id", deleteReviewHandler);

// /api/users/:id -> PATCH
router.patch("/:id", updateReviewHandler);

export default router;

import { PrismaClient } from "@prisma/client";

import { Reviews } from "./reviews.types";

const prisma = new PrismaClient();

export async function getAllReviews() {
  const reviews = await prisma.reviews.findMany();
  return reviews;
}
```

### Continued development

- I will continue practicing to have a better handling of DOM, studying and consulting my mentors so that every day I improve my knowledge.

### Useful resources

- https://www.prisma.io/
- https://www.pgadmin.org/download/

## Author

- email - [guialexander1@gmail.com]
- Twitter - [@guialexander1](https://www.twitter.com/guialexander1)
- Github - [guialexander]

## Acknowledgments

-I want to thank the make it real family since it has given me a new vision of my working life to improve and get out of the comfort zone and know that we can give more than what we already know
