import HomePage from "@/components/pages/Home";
import { getAllQuiz } from "@/fetcher/quiz";
import { cookies } from "next/headers";

export default async function Home() {
  const { data } = await getAllQuiz();
  const cookieJar = cookies();
  const { value } = cookieJar.get("username");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-5">
      <HomePage quizzes={data} username={value} />
    </main>
  );
}
