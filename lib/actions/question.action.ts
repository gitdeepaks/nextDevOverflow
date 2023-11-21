"use server";
import Question from "@/database/question.model";
import { connectToDataBase } from "../mongoose";
import Tag from "@/database/tag.model";
import { revalidatePath } from "next/cache";

export async function createQuestion(params: any) {
  try {
    connectToDataBase();

    const { title, content, tags, author, path } = params;

    // Create a Question

    const question = await Question.create({
      title,
      content,
      author,
    });

    const tagDocumets = [];

    // create a Tag

    for (const tag of tags) {
      const existingTags = await Tag.findOneAndUpdate(
        { name: { $regex: new RegExp(`^${tag}$`, "i") } },
        { $setOnInsert: { name: tag }, $push: { questions: question._id } },
        { upsert: true, new: true }
      );
      tagDocumets.push(existingTags._id);
    }
    // update a Question

    await Question.findByIdAndUpdate(question._id, {
      $push: { tags: { $each: tagDocumets } },
    });

    // create an interaction recort for the users ask-question

    // increment auther reputation by +5 for creating question
    revalidatePath(path);
  } catch (error) {}
}
