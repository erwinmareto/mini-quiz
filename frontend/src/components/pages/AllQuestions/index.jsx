import QuestionBlock from "@/components/parts/QuestionBlock";
import Link from "next/link";
const AllQuestionsPage = ({ questionsData }) => {
  return (
    <section className="container mx-auto h-auto py-12 px-5 space-y-8">
      <div className="flex flex-col space-y-5">
        <div className="flex justify-between">

        <h1 className="text-4xl">Questions</h1>
        <Link href={`/add/question/${questionsData[0].quizId}`}>
        <button className="bg-yellow-300 px-5 py-2 rounded-lg">Add Question</button>
        </Link>
        </div>
        {questionsData.map((question) => (
            <QuestionBlock key={question.id} question={question} />
        ))}
        
      </div>
    </section>
  );
};

export default AllQuestionsPage;
