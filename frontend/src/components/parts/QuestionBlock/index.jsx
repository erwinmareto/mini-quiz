'use client'
import { deleteQuestion } from "@/fetcher/question";
import Link from "next/link";
import { useRouter } from "next/navigation";

const QuestionBlock = ({ question }) => {
    const router = useRouter()
    const handleDelete = async () => {
        const deleted = await deleteQuestion(question.id);
        console.log(deleted);
        window.alert("Question Deleted");
        router.push("/")
    }
  return (
    <div className="flex justify-between bg-slate-500 rounded-2xl p-7 gap-2">
      <h1 className="text-3xl">{question.question}</h1>
      <div className="flex gap-2">

      <Link href={`/edit/${question.quizId}/questions/${question.id}`}>
        <button className="bg-blue-300 px-5 py-2 rounded-lg">Edit</button>
      </Link>
      <button className="bg-red-300 px-5 py-2 rounded-lg" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default QuestionBlock;
