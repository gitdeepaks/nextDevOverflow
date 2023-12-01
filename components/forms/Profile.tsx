import React from "react";
import { z } from "zod";

interface Params {
  clerkId: string;
  user: string;
}

const Profile = ({ clerkId, user }: Params) => {
  const parsedUser = JSON.parse(user);

  const formSchema = z.object({
    username: z.string().min(2).max(50),
  });
  return <div>Profile</div>;
};

export default Profile;
