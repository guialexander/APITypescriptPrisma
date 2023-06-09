import { Request, Response } from 'express';

import {
  //createUser,
  //deleteUser,
  getAllReviews,
  //getUserByEmail,
 // getUserById,
 // updateUser,
} from './reviews.service';

export async function getAllReviewsHandler(req: Request, res: Response) {
  const users = await getAllReviews();

  return res.json(users);
}
/*
export async function createUserHandler(req: Request, res: Response) {
  const data = req.body;

  const user = await createUser(data);

  return res.json(user);
}

export async function getUserHandler(req: Request, res: Response) {
  const { id } = req.params;

  const user = await getUserById(id);

  if (!user) {
    return res.status(404).json({
      message: 'User not found',
    });
  }

  return res.json(user);
}

export async function deleteUserHandler(req: Request, res: Response) {
  const { id } = req.params;

  const user = await getUserById(id);

  if (!user) {
    return res.status(404).json({
      message: 'User not found',
    });
  }

  await deleteUser(id);

  return res.json(user);
}

export async function updateUserHandler(req: Request, res: Response) {}*/
