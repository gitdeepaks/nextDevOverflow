import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTags from "./RenderTags";

const RightSideBar = () => {
  const hotQuestions = [
    {
      _id: 1,
      title: "How do I use the express module in node.js?",
    },
    {
      _id: 2,
      title: "How do I use the custom express module in Next.js?",
    },
    {
      _id: 3,
      title: "How do I use the express module in React.js?",
    },
    {
      _id: 4,
      title: "How do I use the express module in Vue.js?",
    },
    {
      _id: 5,
      title: "How do I use the express module in Nest.js?",
    },
  ];

  const popularTages = [
    { _id: 1, name: "javascript", totalQuestions: 5 },
    { _id: 2, name: "react", totalQuestions: 5 },
    { _id: 3, name: "veu", totalQuestions: 6 },
    { _id: 4, name: "node", totalQuestions: 2 },
    { _id: 5, name: "redux", totalQuestions: 10 },
  ];
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Question</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((question) => (
            <Link
              href={`/questions/${question._id}`}
              key={question._id}
              className="flex cursor-pointer items-center gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevron-right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTages.map((tag) => (
            <RenderTags
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSideBar;
