import { PrismaClient } from '@prisma/client';

import { Reviews } from './reviews.types';

const prisma = new PrismaClient();

export async function getAllReviews() {
  const reviews= await prisma.reviews.findMany();
  return reviews;
}

export async function createReview(data: Reviews) {
  const Review = await prisma.reviews.create({
    data,
  });

  return Review;
}

export async function getReviewById(id: string) {
  const Review = await prisma.reviews.findUnique({
    where: {
      id,
    },
  });

  return Review;
}

export async function deleteReview(id: string) {
  const Review = await prisma.reviews.delete({
    where: {
      id,
    },
  });

  return Review;
}

export async function updateReview(data: Reviews) {
  const Review = await prisma.reviews.update({
    where: {
      id: data.id,
    },
    data,
  });

  return Review;
}

