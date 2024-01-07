import QuestionForm from "@/components/parts/Forms/QuestionForm";

const QuestionFormPage = ({ quizId, editData }) => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-24 py-5">
      <QuestionForm quizId={quizId} editData={editData} />
    </section>
  );
};

export default QuestionFormPage;
