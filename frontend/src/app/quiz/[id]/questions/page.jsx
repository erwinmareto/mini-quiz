import AllQuestionsPage from "@/components/pages/AllQuestions";
import { getQuestionsByQuizId } from "@/fetcher/question";


export default async function AllQuestions({ params }) {
  const { id } = params;
  const { data } = await getQuestionsByQuizId(id);
  return (
    <AllQuestionsPage questionsData={data} />
  );
}
