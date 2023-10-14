import Competition from "./Competition";
import Matches from "./Matches";

const LeagueTable = ({ getMatch: match }: { getMatch: matchesType }) => {
  return (
    <div className="py-3 px-2 mx-auto max-w-[100%] pr-6 sm:pr-0 sm:w-[600px] md:px-3 rounded-md flex flex-col bg-zinc-50 dark:bg-zinc-900 shadow-xl">
      <Competition match={match} />
      <Matches match={match} />
    </div>
  );
};

export default LeagueTable;
