import { Request, Response } from 'express';

import {
  createReview,
  deleteReview,
  getAllReviews,
  getReviewById,
  updateReview,
} from './reviews.service';

export async function getAllReviewsHandler(req: Request, res: Response) {
  const users = await getAllReviews();

  return res.json(users);
}


export async function createReviewHandler(req: Request, res: Response) {
  const data = req.body;
  try{
    const Review = await createReview(data);
    return res.json(Review);
    }
    catch (error: any) {
    console.log(error);
}

}


export async function getReviewHandler(req: Request, res: Response) {
  const { id } = req.params;

  const Review = await getReviewById(id);

  if (!Review) {
    return res.status(404).json({
      message: 'User not found',
    });
  }

  return res.json(Review);
}

export async function deleteReviewHandler(req: Request, res: Response) {
  const { id } = req.params;

  const Review = await getReviewById(id);

  if (!Review) {
    return res.status(404).json({
      message: 'User not found',
    });
  }

 // await deleteReview(id);

  return res.json(Review);
}

export async function updateReviewHandler(req: Request, res: Response) {
  const { id } = req.params;
  const data = req.body;

  const Review = await getReviewById(id);

  if (!Review) {
    return res.status(404).json({
      message: 'User not found',
    });
  }

  const updatedReview = await updateReview({ ...data, id });

  return res.json(updatedReview);
}
