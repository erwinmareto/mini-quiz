"use client";

import { addQuestionWithOptions, editQuestion } from "@/fetcher/question";
import { useRouter } from "next/navigation";

const QuestionForm = ({ quizId, editData }) => {
  const optionAmount = [1, 2, 3, 4];
  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    if (formData.get("answer") === "") {
      window.alert("Please select an answer");
      return;
    }

    let answers = {};
    for (let i = 1; i <= 4; i++) {
      answers[`isCorrect${i}`] = formData.get("answer") === String(i);
    }
    const payload = {
      quizId,
      question: formData.get("question"),
      option1: formData.get("option1"),
      option2: formData.get("option2"),
      option3: formData.get("option3"),
      option4: formData.get("option4"),
      ...answers,
    };

    if (editData) {
      const optionIds = editData.Option.reduce((obj, option, i) => {
        obj[`optionId${i + 1}`] = option.id;
        return obj;
      }, {});
      
      const question = await editQuestion(editData.id, {...payload, ...optionIds});
      console.log(question);
      window.alert("Question Edited");
      router.refresh();
      return;
    }

    const question = await addQuestionWithOptions(payload);
    console.log(question);
    window.alert("Question Added, You can add another one now");
    router.refresh();
    return;
  };
  return (
    <div className="bg-blue-800 w-1/2 p-10 rounded-xl space-y-5">
      <h1 className="text-4xl">{editData ? "Edit Question" : "Add Question"}</h1>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <label htmlFor="question">Question</label>
        <input
          className="h-10 p-2 rounded-lg"
          type="text"
          name="question"
          id="question"
          defaultValue={editData?.question}
        />
        {/* {optionAmount.map((optionNum) => (
          <>
            <label key={optionNum} htmlFor={`option${optionNum}`}>Option {optionNum}</label>
            <input
              className="h-10 p-2 rounded-lg"
              type="text"
              name={`option${optionNum}`}
              id={`option${optionNum}`}
              defaultValue={editData?.Option[optionNum - 1].option}
            />
          </>
        ))} */}
        <label htmlFor="option1">Option 1</label>
        <input
          className="h-10 p-2 rounded-lg"
          type="text"
          name="option1"
          id="option1"
          defaultValue={editData?.Option[0].option}
        />
        <label htmlFor="option2">Option 2</label>
        <input
          className="h-10 p-2 rounded-lg"
          type="text"
          name="option2"
          id="option2"
          defaultValue={editData?.Option[1].option}
        />
        <label htmlFor="option3">Option 3</label>
        <input
          className="h-10 p-2 rounded-lg"
          type="text"
          name="option3"
          id="option3"
          defaultValue={editData?.Option[2].option}
        />
        <label htmlFor="option4">Option 4</label>
        <input
          className="h-10 p-2 rounded-lg"
          type="text"
          name="option4"
          id="option4"
          defaultValue={editData?.Option[3].option}
        />
        <label htmlFor="answer">The correct answer</label>
        <select className="h-10 p-2 rounded-lg" name="answer">
          <option value="">Select an option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
          <option value="4">Option 4</option>
        </select>
        <div className="flex justify-center">
          <button
            className="bg-slate-300 px-5 py-2 rounded-lg w-1/4 hover:bg-slate-500"
            type="submit"
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuestionForm;
