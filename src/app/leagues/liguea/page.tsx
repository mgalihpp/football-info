import { dateConvert } from "@/lib/utils";
import Status from "@/components/Status";
import { getFL1, getFL1Standings } from "@/app/api/route";

export default async function Home() {
  const { matches } = await getFL1;

  const data: Standings[] = await getFL1Standings

  return (
    <main className="px-2 md:px-4 md:w-[600px]">
      <div className="flex justify-between items-center mb-4 md:mb-2">
        <h1 className="text-md md:text-xl font-bold">LIGUE 1 MATCHES</h1>
        <div className="px-4 py-0 md:py-1 bg-slate-900 dark:bg-slate-100 rounded-md text-secondary text-sm">
          <p className="text-xs">{dateConvert}</p>
        </div>
      </div>
      <Status
        matchesList={matches}
        // matchesListFinished={getPLYesterday}
        standings={data[0]?.table}
      />
    </main>
  );
}
