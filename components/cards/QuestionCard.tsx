import React from "react";

interface Props {
  _id: string;
  title: string;
  tags: {
    _id: string;
    name: string;
  }[];
  auther: {
    _id: string;
    name: string;
    picutre: string;
  };
  upvotes: number;
  answers: Array<object>;
  views: number;
  createdAt: Date;
}

const QuestionCard = ({
  _id,
  title,
  tags,
  auther,
  upvotes,
  answers,
  views,
  createdAt,
}: Props) => {
  return <div>QuestionCard</div>;
};

export default QuestionCard;
