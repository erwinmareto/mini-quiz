const getAllQuiz = async () => {
  try {
    const quizzes = await fetch("http://localhost:8000/quizzes", {
        next: { revalidate: 10 },
    });
    return await quizzes.json();
  } catch (error) {
    throw new Error(error);
  }
};

const getQuizById = async (id) => {
  try {
    const quiz = await fetch(`http://localhost:8000/quizzes/${id}`);
    return await quiz.json();
  } catch (error) {
    throw new Error(error);
  }
}

const addQuiz = async (payload) => {
  try {
    const quiz = await fetch("http://localhost:8000/quizzes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return await quiz.json();
  } catch (error) {
    throw new Error(error);
  }
}

const editQuiz = async (id, payload) => {
  try {
    const quiz = await fetch(`http://localhost:8000/quizzes/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return await quiz.json();
  } catch (error) {
    throw new Error(error);
  }
}

const deleteQuiz = async (id) => {
  try {
    const quiz = await fetch(`http://localhost:8000/quizzes/${id}`, {
      method: "DELETE",
    });
    return await quiz.json();
  } catch (error) {
    throw new Error(error);
  }
}

export { getAllQuiz, getQuizById, addQuiz, editQuiz, deleteQuiz };
