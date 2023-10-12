import Image from "next/legacy/image";

const Matches = ({ data }: { data: matchesType }) => {
  const getDate = new Date(data?.utcDate).toLocaleTimeString("en-Us", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div className="grid grid-cols-3 px-2">
      <div className="w-full flex items-center">
        <div className="w-6 h-6 relative mr-2">
          <Image
            src={data?.homeTeam?.crest!}
            alt={data?.homeTeam?.name!}
            layout="fill"
            objectFit='contain'
            sizes="10vw"
          />
        </div>
        <p className="text-xs sm:text-sm ">{data?.homeTeam?.name}</p>
      </div>
      <div className="px-2 m-auto flex justify-center items-center bg-zinc-200 dark:bg-zinc-900 dark:border rounded-md">
        {data?.status == "FINISHED" ? (
          <p className="py-1 text-xs sm:text-sm">
            {data?.score?.fullTime?.home} : {data?.score?.fullTime?.away}
          </p>
        ) : (
          <p className="py-1 text-xs sm:text-sm">{getDate}</p>
        )}
      </div>
      <div className="w-full flex items-center justify-end">
        <p className="text-xs sm:text-sm text-right">{data?.awayTeam?.name}</p>
        <div className="w-6 h-6 relative ml-2">
          <Image
            src={data?.awayTeam?.crest!}
            alt={data?.awayTeam?.name!}
            layout="fill"
            objectFit="contain"
            sizes="20vw"
          />
        </div>
      </div>
    </div>
  );
};

export default Matches;
