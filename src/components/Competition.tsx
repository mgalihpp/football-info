import Image from "next/image";

const Competition = ({ match }: { match: matchesType }) => {
  const date = new Date(match?.utcDate);
  const dateConvert = date.toDateString();

  return (
    <div className="mb-4 flex justify-between items-center rounded-md px-4 py-1 bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700">
      <div className="flex space-x-4">
        <Image
          sizes="10vw"
          src={match?.competition.emblem}
          alt={match?.competition.name}
          width={20}
          height={20}
          className="dark:bg-primary rounded-sm"
          loading="lazy"
        />
        <p className="text-xs sm:text-sm text-primary">
          {match?.competition.name}
        </p>
      </div>
      <p className="text-xs md:text-sm text-primary">{dateConvert}</p>
    </div>
  );
};

export default Competition;
