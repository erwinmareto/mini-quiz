import ResultPage from "@/components/pages/Results";
import { getQuestionsByQuizId } from "@/fetcher/question";
import { addScore } from "@/fetcher/score";
import { countScore } from "@/fetcher/userResponse";
import { cookies } from "next/headers";

export default async function Results({ params }) {
  const cookieJar = cookies();
  const {value} = cookieJar.get("id");
  const { id } = params;
  const quizData = await getQuestionsByQuizId(id);
  const questionsTotal = quizData.data.length;
  const { data: answersCorrect } = await countScore(1, id);
  const totalScore = ((answersCorrect / questionsTotal) * 100).toFixed(1);
  const payload = {
    userId: value,
    quizId: id,
    score: totalScore,
  }
  const add = await addScore(payload);
  return (
    <ResultPage totalScore={totalScore} answersCorrect={answersCorrect} questionsTotal={questionsTotal} />
  );
}
