const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const alice = await prisma.user.upsert({
    where: { id: 1 },
    update: {},
    create: {
      username: "Alice",
      password: "alice",
    },
  });

  const bob = await prisma.user.upsert({
    where: { id: 2 },
    update: {},
    create: {
      username: "Bob",
      password: "bobsburger",
    },
  });

  const group1 = await prisma.quizGroup.upsert({
    where: { id: 1 },
    update: {},
    create: {
      title: "Starter Pack",
      description: "The first quiz available",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  });

  const group2 = await prisma.quizGroup.upsert({
    where: { title: "History Quiz" },
    update: {},
    create: {
      title: "History Quiz",
      description: "Can you make history in this quiz?",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  });

  const group3 = await prisma.quizGroup.upsert({
    where: { title: "Pop Quiz" },
    update: {},
    create: {
      title: "Pop Quiz",
      description: "Prove that you are indeed a fellow kids",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  });

  const generals1 = await prisma.question.upsert({
    where: { id: 1 },
    update: {},
    create: {
      quizId: 1,
      question: "Who is the CEO of Microsoft",
      // category: "TECH",
    },
  });

  const generals2 = await prisma.question.upsert({
    where: { id: 2 },
    update: {},
    create: {
      quizId: 1,
      question: "What is the freezing temperature of water?",
      // category: "SCIENCE",
    },
  });

  const generals3 = await prisma.question.upsert({
    where: { id: 3 },
    update: {},
    create: {
      quizId: 1,
      question: "Which country went on a war with emus?",
      // category: "HISTORY",
    },
  });

  const history1 = await prisma.question.upsert({
    where: { id: 4 },
    update: {},
    create: {
      quizId: 2,
      question: "Who was the first president of the US?",
      // category: "HISTORY",
    },
  });

  const history2 = await prisma.question.upsert({
    where: { id: 5 },
    update: {},
    create: {
      quizId: 2,
      question: "What year did World War II end?",
      // category: "HISTORY",
    },
  });

  const history3 = await prisma.question.upsert({
    where: { id: 6 },
    update: {},
    create: {
      quizId: 2,
      question: "Where did the first olympics happen?",
      // category: "HISTORY",
    },
  });

  const option1 = await prisma.option.upsert({
    where: { id: 1 },
    update: {},
    create: {
      questionId: 1,
      option: "Satya Nadela",
      isCorrect: true,
    },
  });

  const option2 = await prisma.option.upsert({
    where: { id: 2 },
    update: {},
    create: {
      questionId: 1,
      option: "Elon Musk",
      isCorrect: false,
    },
  });

  const option3 = await prisma.option.upsert({
    where: { id: 3 },
    update: {},
    create: {
      questionId: 1,
      option: "Mark Zuckerberg",
      isCorrect: false,
    },
  });

  const option4 = await prisma.option.upsert({
    where: { id: 4 },
    update: {},
    create: {
      questionId: 1,
      option: "Sam Fisher",
      isCorrect: false,
    },
  });

  const option5 = await prisma.option.upsert({
    where: { id: 5 },
    update: {},
    create: {
      questionId: 2,
      option: "50°F",
      isCorrect: false,
    },
  });

  const option6 = await prisma.option.upsert({
    where: { id: 6 },
    update: {},
    create: {
      questionId: 2,
      option: "269°K",
      isCorrect: false,
    },
  });

  const option7 = await prisma.option.upsert({
    where: { id: 7 },
    update: {},
    create: {
      questionId: 2,
      option: "5°C",
      isCorrect: false,
    },
  });

  const option8 = await prisma.option.upsert({
    where: { id: 8 },
    update: {},
    create: {
      questionId: 2,
      option: "0°C",
      isCorrect: true,
    },
  });

  const option9 = await prisma.option.upsert({
    where: { id: 9 },
    update: {},
    create: {
      questionId: 3,
      option: "Australia",
      isCorrect: true,
    },
  });

  const option10 = await prisma.option.upsert({
    where: { id: 10 },
    update: {},
    create: {
      questionId: 3,
      option: "United States",
      isCorrect: false,
    },
  });

  const option11 = await prisma.option.upsert({
    where: { id: 11 },
    update: {},
    create: {
      questionId: 3,
      option: "UK",
      isCorrect: false,
    },
  });

  const option12 = await prisma.option.upsert({
    where: { id: 12 },
    update: {},
    create: {
      questionId: 3,
      option: "Germany",
      isCorrect: false,
    },
  });

  const option13 = await prisma.option.upsert({
    where: { id: 13 },
    update: {},
    create: {
      questionId: 4,
      option: "Abraham Lincoln",
      isCorrect: false,
    },
  });

  const option14 = await prisma.option.upsert({
    where: { id: 14 },
    update: {},
    create: {
      questionId: 4,
      option: "Thomas Jefferson",
      isCorrect: false,
    },
  });

  const option15 = await prisma.option.upsert({
    where: { id: 15 },
    update: {},
    create: {
      questionId: 4,
      option: "George Washington",
      isCorrect: true,
    },
  });
  const option16 = await prisma.option.upsert({
    where: { id: 16 },
    update: {},
    create: {
      questionId: 4,
      option: "Alexander Hamilton",
      isCorrect: false,
    },
  });

  const option17 = await prisma.option.upsert({
    where: { id: 17 },
    update: {},
    create: {
      questionId: 5,
      option: "1940",
      isCorrect: false,
    },
  });

  const option18 = await prisma.option.upsert({
    where: { id: 18 },
    update: {},
    create: {
      questionId: 5,
      option: "1945",
      isCorrect: true,
    },
  });

  const option19 = await prisma.option.upsert({
    where: { id: 19 },
    update: {},
    create: {
      questionId: 5,
      option: "1944",
      isCorrect: true,
    },
  });

  const option20 = await prisma.option.upsert({
    where: { id: 20 },
    update: {},
    create: {
      questionId: 5,
      option: "2000",
      isCorrect: true,
    },
  });

    const option21 = await prisma.option.upsert({
      where: { id: 21 },
      update: {},
      create:
        {
            questionId: 6,
          option: "Athens",
          isCorrect: true,
        },
    });

    const option22 = await prisma.option.upsert({
        where: { id: 22 },
        update: {},
        create: {
          questionId: 6,
          option: "Lisbon",
          isCorrect: false,
        },
      });

    const option23 = await prisma.option.upsert({
        where: { id: 23 },
        update: {},
        create: {
          questionId: 6,
          option: "Frankfurt",
          isCorrect: false,
        },
      });

    const option24 = await prisma.option.upsert({
        where: { id: 24 },
        update: {},
        create: {
          questionId: 6,
          option: "London",
          isCorrect: false,
        },
      });

  console.log({ alice, bob, group1, group2, group3 });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })

  .catch(async (e) => {
    console.error(e);

    await prisma.$disconnect();

    process.exit(1);
  });
