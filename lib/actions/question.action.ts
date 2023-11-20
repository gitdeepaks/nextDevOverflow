"use server";

import { connectToDataBase } from "../mongoose";

export async function createQuestion(params: any) {
  // eslint-disable-next-line no-empty
  try {
    connectToDataBase();
  } catch (error) {}
}
