const insertUserResponse = async ({
  id,
  userId,
  quizId,
  questionId,
  selectedOptionId,
  isCorrect,
}) => {
  try {
    console.log(id, "dddddddddddddddddd");
    const res = await fetch(
      `http://localhost:8000/userResponses/insert/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          quizId,
          questionId,
          selectedOptionId,
          isCorrect,
        }),
      }
    );
    return res.json();
  } catch (error) {
    throw new Error(error);
  }
};

const getPrevUserAnswer = async (userId, questionId) => {
  try {
    const res = await fetch(
      `http://localhost:8000/userResponses/user/${userId}/question/${questionId}`,
      {
        next: {revalidate: 1}
      }
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
  } catch (error) {
    throw new Error(error);
  }
};

const countScore = async (userId, quizId) => {
  try {
    const res = await fetch(
      `http://localhost:8000/userResponses/count/${userId}/${quizId}`,
      {
        next: {revalidate: 1}
      }
    );
    return res.json();
  } catch (error) {
    throw new Error(error);
  }
};

export { insertUserResponse, getPrevUserAnswer, countScore };
