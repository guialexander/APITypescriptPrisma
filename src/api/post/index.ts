import { Router } from 'express';

import {
  createPostHandler,
  deletePostHandler,
  getAllPostHandler,
  getPostHandler,
  updatePostHandler,
} from './post.controller';

const router = Router();

// /api/posts -> GET
router.get('/', getAllPostHandler);

// /api/posts -> POST
router.post('/', createPostHandler);

// /api/posts/:id -> GET
router.get('/:id', getPostHandler);

// /api/posts/:id -> DELETE
router.delete('/:id', deletePostHandler);

// /api/posts/:id -> PATCH
router.patch('/:id', updatePostHandler);

export default router;
