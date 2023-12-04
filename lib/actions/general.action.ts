"use server";

import Question from "@/database/question.model";
import { connectToDataBase } from "../mongoose";
import { SearchParams } from "./shared.types";
import Answer from "@/database/answer.model";
import User from "@/database/user.model";
import Tag from "@/database/tag.model";

const SearchableTypes = ["question", "answer", "user", "tag"];

export async function globalSearch(params: SearchParams) {
  try {
    await connectToDataBase();
    const { query, type } = params;

    const regexQuery = { $regex: query, $options: "i" };

    let results = [];

    const modalsAndTypes = [
      { modal: Question, seachField: "title", type: "question" },
      { modal: Answer, seachField: "name", type: "answer" },
      { modal: User, seachField: "content", type: "user" },
      { modal: Tag, seachField: "name", type: "tag" },
    ];

    const typeLower = type?.toLowerCase();

    if (!typeLower || !SearchableTypes.includes(typeLower)) {
      //

      for (const { modal, seachField, type } of modalsAndTypes) {
        const queryResults = await modal
          .find({
            [seachField]: regexQuery,
          })
          .limit(2);

        results.push(
          ...queryResults.map((r) => ({
            title:
              type === "answer" ? `Answer containing ${query}` : r[seachField],
            type,
            id:
              type === "user"
                ? r.clerkId
                : type === "answer"
                ? r.question
                : r._id,
          }))
        );
      }
    } else {
      const modalInfo = modalsAndTypes.find((m) => m.type === type);

      if (!modalInfo) {
        throw new Error(`Invalid type ${type}`);
      }

      const queryResults = await modalInfo.modal
        .find({
          [modalInfo.seachField]: regexQuery,
        })
        .limit(8);

      results = queryResults.map((r) => ({
        title:
          type === "answer"
            ? `Answer containing ${query}`
            : r[modalInfo.seachField],
        type,
        id:
          type === "user" ? r.clerkId : type === "answer" ? r.question : r._id,
      }));
    }

    return JSON.stringify(results);
  } catch (error) {
    console.error(`Error fetching local result :${error}`);
    throw error;
  }
}
