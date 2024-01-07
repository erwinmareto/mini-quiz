import Image from "next/image";
import HomePage from "@/components/pages/Home";
import { getAllQuiz } from "@/fetcher/quiz";

export default async function Home() {
  const { data } = await getAllQuiz();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-5">
      <HomePage quizzes={data} />
    </main>
  );
}
