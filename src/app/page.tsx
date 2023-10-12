import { dateConvert } from "@/lib/utils";
import Status from "@/components/Status";
import { getMatchesFootballFinished, getPl, getPlStandings } from "./api/route";

export default async function Home() {
  // const { matches } = await getPl;
  let { matches } = await getPl;

  const getMatchEnd = await getMatchesFootballFinished();
  const getPLMatchYesterday = getMatchEnd?.matches;

  const data: Standings[] = await getPlStandings;

  return (
    <main className="px-1 sm:px-2 md:px-4 md:w-[600px]">
      <div className="flex justify-between items-center mb-4 md:mb-2">
        <h1 className="text-md md:text-xl font-bold">MATCHES</h1>
        <div className="px-4 py-0 md:py-1 bg-slate-900 dark:bg-slate-100 rounded-md text-secondary text-sm">
          <p className="text-xs">{dateConvert}</p>
        </div>
      </div>
      {/* data matches */}
      <Status
        matchesList={matches}
        matchesListFinished={getPLMatchYesterday}
        standings={data[0]?.table}
      />
    </main>
  );
}
