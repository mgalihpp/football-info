import Image from "next/legacy/image";

const Matches = ({ match }: { match: matchesType }) => {
  const getDate = new Date(match?.utcDate).toLocaleTimeString("en-Us", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div className="grid grid-cols-3 px-2">
      <div className="w-full flex items-center">
        <div className="w-6 h-6 relative mr-2">
          <Image
            src={match?.homeTeam?.crest!}
            alt={match?.homeTeam?.name!}
            layout="fill"
            objectFit='contain'
            sizes="10vw"
            loading="lazy"
          />
        </div>
        <p className="text-xs sm:text-sm ">{match?.homeTeam?.name}</p>
      </div>
      <div className="px-2 m-auto flex justify-center items-center bg-zinc-200 dark:bg-zinc-900 dark:border rounded-md">
        {match?.status == "FINISHED" ? (
          <p className="py-1 text-xs sm:text-sm">
            {match?.score?.fullTime?.home} : {match?.score?.fullTime?.away}
          </p>
        ) : (
          <p className="py-1 text-xs sm:text-sm">{getDate}</p>
        )}
      </div>
      <div className="w-full flex items-center justify-end">
        <p className="text-xs sm:text-sm text-right">{match?.awayTeam?.name}</p>
        <div className="w-6 h-6 relative ml-2">
          <Image
            src={match?.awayTeam?.crest!}
            alt={match?.awayTeam?.name!}
            layout="fill"
            objectFit="contain"
            sizes="20vw"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Matches;
