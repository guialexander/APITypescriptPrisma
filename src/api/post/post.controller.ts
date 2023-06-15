import { Request, Response } from 'express';

import {
  createPost,
  deletePost,
  getAllPost,
  getPostById,
  updatePost,
} from './post.service';

export async function getAllPostHandler(req: Request, res: Response) {
  const posts = await getAllPost();

  return res.json(posts);
}

export async function createPostHandler(req: Request, res: Response) {
  const data = req.body;
  try{
    const post = await createPost(data);
    return res.json(post);
    }
    catch (error: any) {
    console.log(error);
}

}


export async function getPostHandler(req: Request, res: Response) {
  const { id } = req.params;

  const post= await getPostById(id);

  if (!post) {
    return res.status(404).json({
      message: 'User not found',
    });
  }

  return res.json(post);
}

export async function deletePostHandler(req: Request, res: Response) {
  const { id } = req.params;

  const post = await getPostById(id);

  if (!post) {
    return res.status(404).json({
      message: 'User not found',
    });
  }

 // await deletePost(id);

  return res.json(post);
}

export async function updatePostHandler(req: Request, res: Response) {
  const { id } = req.params;
  const data = req.body;

  const post = await getPostById(id);

  if (!post) {
    return res.status(404).json({
      message: 'User not found',
    });
  }

  const updatedPost = await updatePost({ ...data, id });

  return res.json(updatedPost);
}

