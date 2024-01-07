import QuestionFormPage from "@/components/pages/Add/Question";
import { getQuestionWithOptions } from "@/fetcher/question";

export default async function EditQuestion({ params }) {
  const { id, questionId } = params;
  const { data } = await getQuestionWithOptions(questionId);
  return <QuestionFormPage quizId={id} editData={data} />;
}
