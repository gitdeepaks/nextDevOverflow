import Question from "@/components/forms/Question";
import { getUserbyId } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { junit } from "node:test/reporters";
import React from "react";

const Page = async () => {
  // const { userId } = auth();
  const userId = "12345";

  if (!userId) redirect("/sign-in");

  const mongoUser = await getUserbyId({ userId });
  console.log(mongoUser);
  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">Ask a question</h1>
      <div className="mt-9">
        <Question mongoUserId={JSON.stringify(mongoUser._id)} />
      </div>
    </div>
  );
};

export default Page;
