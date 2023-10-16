import { getCompetition, getStandings, getTopScore } from "@/app/api/route";
import Status from "@/components/Status";
import { Leagues, dateConvert } from "@/lib/utils";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const matchedLeague = Leagues.find((league) => slug.includes(league.href));

  if (!matchedLeague) {
    notFound();
  }

  const { matches } = await getCompetition({ league: matchedLeague.code });

  const standings: Standings[] = await getStandings({
    league: matchedLeague.code,
  });

  const competitions = await getTopScore({ league: matchedLeague.code });

  return (
    <main className="mx-auto px-2 md:px-4 md:w-[600px]">
      <div className="flex justify-between items-center mb-4 md:mb-2">
        <h1 className="text-md md:text-xl font-bold">
          {matchedLeague.name.toLocaleUpperCase()} MATCHES
        </h1>
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
