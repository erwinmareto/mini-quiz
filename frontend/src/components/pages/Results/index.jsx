import Image from "next/image";
import Link from "next/link";
const ResultPage = ({ totalScore, answersCorrect, questionsTotal }) => {
  return (
    <section className="container mx-auto h-auto py-12 px-5 space-y-8">
      <div className="flex flex-col items-center gap-5">
        <Image
          src="/confetti.png"
          width={200}
          height={200}
          alt="Picture of the author"
        />
        <h1 className="text-4xl">Congratulations</h1>
        <div className="grid text-center">
          <h3>You score is {totalScore}</h3>
          <h4>
            You guessed {answersCorrect} out of {questionsTotal} questions
            right!
          </h4>
        </div>
        <Link href="/">
          <button className="bg-yellow-300 px-5 py-2 rounded-lg">
            Go Home
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ResultPage;
