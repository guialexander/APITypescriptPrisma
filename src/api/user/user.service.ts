import { PrismaClient } from '@prisma/client';

import { User } from './user.types';

const prisma = new PrismaClient();

export async function getAllUser() {
  const users = await prisma.users.findMany();
  return users;
}

export async function createUser(data: User) {
  const user = await prisma.users.create({
    data,
  });

  return user;
}


export async function getUserById(id: string) {
  const user = await prisma.users.findUnique({
    where: {
      id,
    },
  });

  return user;
}
/*

 export async function getUserByEmail(email: string) {
  const user = await prisma.users.findUnique({
    where: {
      email,
    },
  });

  return user;
}*/

export async function deleteUser(id: string) {
  const user = await prisma.users.delete({
    where: {
      id,
    },
  });

  return user;
}

export async function updateUser(data: User) {
  const user = await prisma.users.update({
    where: {
      id: data.id,
    },
    data,
  });

  return user;
}

