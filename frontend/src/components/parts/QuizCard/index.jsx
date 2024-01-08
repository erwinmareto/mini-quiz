import Link from "next/link";

const QuizCard = ({ username, id, title, description, thumbnail }) => {
  return (
    <div className="flex flex-col items-center bg-slate-600 gap-5 p-10 rounded-2xl w-2/5 ">
      <img
        src={thumbnail}
        alt="quiz-thumbnail"
      />
      <div className="grid text-center gap-5">
        <h1 className="text-4xl">{title}</h1>
        <h3 className="text-l">{description}</h3>
      </div>
      <div className="flex gap-5">
        <Link href={`/quiz/${id}/questions/1`}>
          <button className="bg-yellow-300 px-5 py-2 rounded-lg">Play</button>
        </Link>
        {username === "admin" && (
          <Link href={`/edit/${id}`}>
            <button className="bg-sky-300 px-5 py-2 rounded-lg">edit</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default QuizCard;
