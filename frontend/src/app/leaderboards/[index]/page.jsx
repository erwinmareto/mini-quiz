import LeaderboardsPage from "@/components/pages/Leaderboards";
import { getAllQuiz } from "@/fetcher/quiz";
import { getScoresWithDetails } from "@/fetcher/score";
import Link from "next/link";

export default async function Leaderboards({ params }) {
  const { index } = params;
  const { data: quizzes } = await getAllQuiz();
  const quizIds = quizzes.map((quiz) => quiz.id);
  const { data } = await getScoresWithDetails(quizIds[index - 1]);

  return (
    <LeaderboardsPage
      title={data[index].quiz.title}
      quizAmount={quizIds.length}
      scoreDatas={data}
      currentPage={parseInt(index)}
    />
  );
}
