import Image from "next/legacy/image";
import React from "react";

const LeagueTopScore = ({
  getTopScore: topScore,
}: {
  getTopScore: scorersType[];
}) => {
  return (
    <div className="pt-3 mx-auto overflow-x-auto min-w-[100px] max-w-[100%] pr-6 sm:pr-0 sm:max-w-[600px]">
      <table className="w-full border-2">
        <thead>
          <tr className="bg-zinc-200 dark:bg-zinc-700">
            <th className="p-2 text-center text-xs font-bold text-zinc-600 dark:text-zinc-200 uppercase tracking-wider">
              P
            </th>
            <th className="p-2 text-left text-xs font-bold text-zinc-600 dark:text-zinc-200 uppercase tracking-wider">
              Name
            </th>
            <th className="p-2 text-left text-xs font-bold text-zinc-600 dark:text-zinc-200 uppercase tracking-wider">
              Team
            </th>
            <th className="p-2 text-center text-xs font-bold text-zinc-600 dark:text-zinc-200 uppercase tracking-wider">
              GP
            </th>
            <th className="p-2 text-center text-xs font-bold text-zinc-600 dark:text-zinc-200 uppercase tracking-wider">
              Goals
            </th>
            <th className="p-2 text-center text-xs font-bold text-zinc-600 dark:text-zinc-200 uppercase tracking-wider">
              Assist
            </th>
            <th className="p-2 text-center text-xs font-bold text-zinc-600 dark:text-zinc-200 uppercase tracking-wider">
              PEN
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-zinc-900 divide-y divide-zinc-200">
          {topScore?.map((table, index) => (
            <tr
              key={index}
              className="text-sm text-zinc-600 dark:text-zinc-300"
            >
              <td className="p-2 text-left">{index + 1}</td>
              <td className="p-2 text-left text-xs">
                {table.player.name}
              </td>
              <td className="p-2 text-left flex items-center">
                <div className="mr-2 w-5 h-5 relative">
                  <Image
                    src={table.team?.crest!}
                    alt={table.team?.tla!}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <p className="text-xs font-medium">{table.team?.shortName}</p>
              </td>
              <td className="p-2 text-center">{table.playedMatches}</td>
              <td className="p-2 text-center">{table.goals}</td>
              <td className="p-2 text-center">{table.assists > 0 ? table.assists : "0"}</td>
              <td className="p-2 text-center">{table.penalties > 0 ? table.penalties : "0"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeagueTopScore;
