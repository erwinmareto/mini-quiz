import QuizForm from "@/components/parts/Forms/QuizForm";

const QuizFormPage = ({editData}) => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-24 py-5">
      <QuizForm editData={editData} />
    </section>
  );
};

export default QuizFormPage;
