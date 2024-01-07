import QuestionPage from "@/components/pages/Question";
import { getQuestionsByQuizId } from "@/fetcher/question";

import { cookies } from "next/headers";
export default async function Quiz({ params }) {
  const cookieJar = cookies();
  const userId = cookieJar.get("id");
  const { id, questionId } = params;
  const { data } = await getQuestionsByQuizId(id);

  const currentQuestion = data[questionId - 1];
  const isLast = parseInt(questionId) === data.length;

  return (
    <section className="container mx-auto h-auto py-12 px-5 space-y-8">
      <QuestionPage
        userId={userId.value}
        quizId={id}
        currentPage={parseInt(questionId)}
        questionId={currentQuestion.id}
        question={currentQuestion.question}
        options={currentQuestion.Option}
        isLast={isLast}
      />
    </section>
  );
}
