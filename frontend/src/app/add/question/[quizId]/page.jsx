import QuestionFormPage from "@/components/pages/Add/Question";

export default function AddQuestion({ params }) {
  const { quizId } = params;
  return <QuestionFormPage quizId={quizId} />;
}
