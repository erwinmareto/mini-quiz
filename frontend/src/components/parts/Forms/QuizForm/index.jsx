"use client";

import { addQuiz, deleteQuiz, editQuiz } from "@/fetcher/quiz";
import Link from "next/link";
import { useRouter } from "next/navigation";

const QuizForm = ({ editData }) => {
  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const payload = {
      title: formData.get("title"),
      description: formData.get("description"),
      image: formData.get("image"),
    };
    if (editData) {
      const quiz = await editQuiz(editData.id, payload);
      console.log(quiz);
      window.alert("Quiz Edited");
      return router.push(`/`);
    }
    const quiz = await addQuiz(payload);
    console.log(quiz);
    router.push(`/add/question/${quiz.data.id}`);
  };

  const handleDelete = async () => {
    const quiz = await deleteQuiz(editData.id);
    console.log(quiz);
    router.push(`/`);
  };
  return (
    <div className="bg-blue-800 w-1/2 p-10 rounded-xl space-y-5">
      <h1 className="text-4xl">{editData ? "Edit Quiz" : "Add Quiz"}</h1>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <label className="text-xl" htmlFor="title">
          Quiz Title
        </label>
        <input
          className="h-10 p-2 rounded-lg"
          type="text"
          name="title"
          id="title"
          defaultValue={editData?.title}
        />
        <label className="text-xl" htmlFor="description">
          Description
        </label>
        <input
          className="h-10 p-2 rounded-lg"
          type="text"
          name="description"
          id="description"
          defaultValue={editData?.description}
        />
        <label className="text-xl" htmlFor="image">
          Image URL
        </label>
        <input
          className="h-10 p-2 rounded-lg"
          type="text"
          name="image"
          id="image"
          defaultValue={editData?.image}
        />
        <div className="flex justify-center gap-5">
          <button className="bg-slate-300 px-5 py-2 rounded-lg w-1/4 hover:bg-slate-500">
            {editData ? "Edit" : "Add"}
          </button>

          {editData && (
            <button
              className="bg-red-500 px-5 py-2 rounded-lg w-1/4 hover:bg-red-300"
              onClick={handleDelete}
            >
              Delete
            </button>
          )}
        </div>
        <div className="flex justify-center">

        {editData && (
          <Link href={`/quiz/${editData.id}/questions`}>
            <button
              className="bg-sky-300 px-5 py-2 rounded-lg hover:bg-sky-500"
            >
              Edit Questions
            </button>
          </Link>
        )}
        </div>
      </form>
    </div>
  );
};

export default QuizForm;
