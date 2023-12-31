import { dateConvert } from "@/lib/utils";
import Status from "@/components/Status";
import { getMatches, getStandings, getTopScore } from "@/app/api/route";

export default async function Home() {
  const { matches } = await getMatches();

  const standings: Standings[] = await getStandings({ league: "PL" });

  const competitions: TopScore = await getTopScore({ league: "PL" });

  return (
    <main className="mx-auto px-2 md:px-4 md:w-[600px]">
      <div className="flex justify-between items-center mb-4 md:mb-2">
        <h1 className="text-md md:text-xl font-bold">ALL MATCHES</h1>
        <div className="px-4 py-0 md:py-1 bg-slate-900 dark:bg-slate-100 rounded-md text-secondary text-sm">
          <p className="text-xs">{dateConvert}</p>
        </div>
      </div>
      <Status
        getMatches={matches}
        // matchesListFinished={getPLYesterday}
        topScore={competitions}
        standings={standings[0]?.table}
      />
    </main>
  );
}
