const getQuestionsByQuizId = async (quizId) => {
  try {
    const questions = await fetch(
      `http://localhost:8000/questions/quiz/${quizId}`,
    );
    return await questions.json();
  } catch (error) {
    throw new Error(error);
  }
};

const getQuestionWithOptions = async (id) => {
  try {
    const question = await fetch(
      `http://localhost:8000/questions/question/${id}`
    );
    return await question.json();
  } catch (error) {
    throw new Error(error);
  }
};

const addQuestionWithOptions = async (payload) => {
  try {
    console.log(JSON.stringify(payload), "<<<<<<<<<<<<<<<<<<<<<<<<");
    const question = await fetch("http://localhost:8000/questions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return await question.json();
  } catch (error) {
    throw new Error(error);
  }
};

const editQuestion = async (id, payload) => {
  try {
    console.log(payload, ">>>>>>>>>>>>>>>>>>>>>");
    const question = await fetch(`http://localhost:8000/questions/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return await question.json();
  } catch (error) {
    throw new Error(error);
  }
}

const deleteQuestion = async (id) => {
  try {
    const question = await fetch(`http://localhost:8000/questions/${id}`, {
      method: "DELETE",
    });
    return await question.json();
  } catch (error) {
    throw new Error(error);
  }
}

export { getQuestionsByQuizId, getQuestionWithOptions, addQuestionWithOptions, editQuestion, deleteQuestion };
