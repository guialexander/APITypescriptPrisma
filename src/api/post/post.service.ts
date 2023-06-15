import { PrismaClient } from '@prisma/client';

import { Posts } from './post.types';

const prisma = new PrismaClient();

export async function getAllPost() {
  const posts = await prisma.posts.findMany();
  return posts;
}

export async function createPost(data: Posts) {
  const post = await prisma.posts.create({
    data,
  });

  return post;
}

export async function getPostById(id: string) {
  const post = await prisma.posts.findUnique({
    where: {
      id,
    },
  });

  return post;
}

export async function deletePost(id: string) {
  const post = await prisma.posts.delete({
    where: {
      id,
    },
  });

  return post;
}

export async function updatePost(data: Posts) {
  const post = await prisma.posts.update({
    where: {
      id: data.id,
    },
    data,
  });

  return post;
}

