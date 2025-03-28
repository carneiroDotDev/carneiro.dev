import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface CardCategoryProps {
  title: string;
  summary: string;
  date: string;
}

function CardCategory({ title, summary, date }: CardCategoryProps) {
  return (
    <Card className="w-[350px] h-[250px] shadow-lg dark:border-gray-600">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{summary}</p>
      </CardContent>
      <CardFooter>
        <time dateTime={date} className="text-xs text-gray-700 dark:text-white">
          {date}
        </time>
      </CardFooter>
    </Card>
  );
}

export default CardCategory;
