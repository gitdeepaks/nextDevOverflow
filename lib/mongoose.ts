import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDataBase = async () => {
  mongoose.set("strict", true);

  if (!process.env.MOGODB_URL) {
    return console.log("MISSING MONGODB_URL");
  }

  if (isConnected) {
    return console.log("Mongodb is already connected");
  }

  try {
    await mongoose.connect(process.env.MOGODB_URL, {
      dbName: "nextdevflow",
    });

    isConnected = true;
    console.log("MongoDB is connected");
  } catch (error) {
    console.log(error);
  }
};
