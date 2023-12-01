import Profile from "@/components/forms/Profile";

import { getUserbyId } from "@/lib/actions/user.action";
import { ParamsProps } from "@/types";
import { auth } from "@clerk/nextjs";
import React from "react";

const Page = async ({ params }: ParamsProps) => {
  const { userId } = auth();

  if (!userId) {
    return null;
  }

  const mongoUser = await getUserbyId({ userId });

  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Edit Question</h1>
      <div className="mt-9">
        <Profile clerkId={userId} user={JSON.stringify(mongoUser)} />
      </div>
    </>
  );
};

export default Page;
