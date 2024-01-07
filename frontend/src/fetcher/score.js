const getScoresWithDetails = async (quizId) => {
  const response = await fetch(`http://localhost:8000/scores/details/${quizId}`);
  const data = await response.json();
  return data;
};

const addScore = async (payload) => {
  const response = await fetch("http://localhost:8000/scores", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  return data;
};

export { getScoresWithDetails, addScore };
