"use client";

import QuizCard from "@/components/parts/QuizCard";
import { register } from "swiper/element/bundle";
import "./styles.css";

register();

const HomePage = ({ quizzes }) => {
  return (
    <>
      <swiper-container
        pagination="true"
        pagination-clickable="true"
        slides-per-view="auto"
        centered-slides="true"
        space-between="30"
        navigation="true"
      >
        {quizzes.map((quiz) => (
          <swiper-slide key={quiz.id}>
            <QuizCard
              id={quiz.id}
              title={quiz.title}
              description={quiz.description}
              thumbnail={quiz.image}
            />
          </swiper-slide>
        ))}
      </swiper-container>
    </>
  );
};

export default HomePage;
