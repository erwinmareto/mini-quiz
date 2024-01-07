import Link from "next/link";

const LeaderboardsPage = ({ title, scoreDatas, quizAmount, currentPage }) => {
  return (
    <section className="container mx-auto h-auto py-12 px-5 space-y-8">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-4xl">Leaderboards</h1>
        <h2 className="text-2xl">{title}</h2>

        <table className="table-auto w-1/2">
          <thead>
            <tr>
              <th className="px-4 py-2">User</th>
              <th className="px-4 py-2">Score</th>
            </tr>
          </thead>
          <tbody>
            {scoreDatas.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-gray-200" : ""}>
                <td className="border px-4 py-2">{row.user.username}</td>
                <td className="border px-4 py-2">{row.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center gap-2">
        {currentPage !== 1 && (
          <Link href={`/leaderboards/${currentPage - 1}`}>
            <button className="bg-yellow-300 px-5 py-2 rounded-lg">Prev</button>
          </Link>
        )}
        {currentPage !== quizAmount - 1 && (
          <Link href={`/leaderboards/${currentPage + 1}`}>
            <button className="bg-yellow-300 px-5 py-2 rounded-lg">Next</button>
          </Link>
        )}
      </div>
    </section>
  );
};

export default LeaderboardsPage;
