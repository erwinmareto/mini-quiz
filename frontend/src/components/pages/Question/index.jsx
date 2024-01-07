"use client";
import { getPrevUserAnswer, insertUserResponse } from "@/fetcher/userResponse";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const QuestionPage = ({
  userId,
  quizId,
  currentPage,
  questionId,
  question,
  options,
  isLast,
}) => {
  const router = useRouter();
  const [prevData, setPrevData] = useState("");
  const [selectedOption, setSelectedOption] = useState(0);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const selectedIndex = formData.get("answer");

    if (!selectedIndex) {
      return;
    }

    const payload = {
      id: 0,
      userId,
      quizId,
      questionId,
      selectedOptionId: options[selectedIndex].id,
      isCorrect: options[selectedIndex].isCorrect,
    };
    console.log(payload, '>>>>>>>>>>>>>>>payload');
    if (prevData) {
      payload.id = prevData.id;
      console.log(payload, '<<<<<<<<<<<<<<<<prevvvv');
    }

    const data = await insertUserResponse(payload);
    console.log(data);
  };

  const goPrev = () => {
    if (!selectedOption) {
      window.alert("Please select an answer first");
      return;
    }
    router.push(`/quiz/${quizId}/questions/${currentPage - 1}`);
  };

  const goNext = () => {
    if (!selectedOption) {
      alert("Please select an answer first");
      return;
    }
    router.push(`/quiz/${quizId}/questions/${currentPage + 1}`);
  };

  const goToResult = () => {
    if (!selectedOption) {
      alert("Please select an answer first");
      return;
    }
    router.push(`/quiz/${quizId}/results`);
  };

  const handleChange = (e) => {
    setSelectedOption(options[e.target.value].id);
  };

  const fetchPrevData = async () => {
    try {
      const { data } = await getPrevUserAnswer(userId, questionId);
      setPrevData(data);
      setSelectedOption(data.selectedOptionId);
    } catch (error) {
      if (error.message.includes("404")) {
        console.log("The resource was not found.");
      }
    }
  };
  useEffect(() => {
    fetchPrevData();
  }, []);
  return (
    <>
      <h1>{question}</h1>
      <div>
        <form
          className="flex flex-col justify-start gap-5"
          onSubmit={handleSubmit}
        >
          {options.map((option, index) => (
            <div
              key={option.id}
              className="flex bg-slate-500 rounded-2xl p-7 gap-2"
            >
              <input
                type="radio"
                name="answer"
                value={index}
                checked={selectedOption === option.id}
                onChange={handleChange}
              />
              <label>{option.option}</label>
            </div>
          ))}
          {/* <button className="bg-yellow-300 px-5 py-2 rounded-lg" type="submit">
            Submit
          </button> */}
          <div className="flex justify-between">
            {currentPage === 1 ? (
              <button
                disabled
                className={`bg-slate-300 px-5 py-2 rounded-lg ${
                  currentPage === 1 && "pointer-events-none opacity-50"
                }`}
                type="submit"
              >
                Prev
              </button>
            ) : (
              <button
                className={`bg-slate-300 px-5 py-2 rounded-lg`}
                type="submit"
                onClick={goPrev}
              >
                Prev
              </button>
            )}

            {isLast ? (
              <button
                className="bg-yellow-300 px-5 py-2 rounded-lg"
                type="submit"
                onClick={goToResult}
              >
                Submit
              </button>
            ) : (
              <button
                className="bg-slate-300 px-5 py-2 rounded-lg"
                type="submit"
                onClick={goNext}
              >
                Next
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default QuestionPage;
