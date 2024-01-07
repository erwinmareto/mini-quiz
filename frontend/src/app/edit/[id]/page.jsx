import QuizFormPage from "@/components/pages/Add/Quiz";
import { getQuizById } from "@/fetcher/quiz";

export default async function EditQuiz({ params }) {
  const { id } = params;
  const { data } = await getQuizById(id);
  return <QuizFormPage editData={data} />;
}
