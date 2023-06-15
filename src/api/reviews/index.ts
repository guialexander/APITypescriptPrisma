import { Router } from 'express';

import {
  createReviewHandler,
  deleteReviewHandler,
  getAllReviewsHandler,
  getReviewHandler,
  updateReviewHandler,
} from './reviews.controller';

const router = Router();

// /api/users -> GET
router.get('/', getAllReviewsHandler);

// /api/users -> POST
router.post('/', createReviewHandler);

// /api/users/:id -> GET
router.get('/:id', getReviewHandler);

// /api/users/:id -> DELETE
router.delete('/:id', deleteReviewHandler);

// /api/users/:id -> PATCH
router.patch('/:id', updateReviewHandler);

export default router;
