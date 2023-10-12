import Image from "next/legacy/image";
import React from "react";

const LeagueStandings = ({ data }: { data: Table[] }) => {
  return (
    <div className="pt-3 overflow-x-auto">
      <table className="w-full border-2">
        <thead>
          <tr className="bg-zinc-200 dark:bg-zinc-700">
            <th className="p-2 text-center text-xs font-bold text-zinc-600 dark:text-zinc-200 uppercase tracking-wider">P</th>
            <th className="p-2 text-left text-xs font-bold text-zinc-600 dark:text-zinc-200 uppercase tracking-wider">Team</th>
            <th className="p-2 text-center text-xs font-bold text-zinc-600 dark:text-zinc-200 uppercase tracking-wider">GP</th>
            <th className="p-2 text-center text-xs font-bold text-zinc-600 dark:text-zinc-200 uppercase tracking-wider">W</th>
            <th className="p-2 text-center text-xs font-bold text-zinc-600 dark:text-zinc-200 uppercase tracking-wider">D</th>
            <th className="p-2 text-center text-xs font-bold text-zinc-600 dark:text-zinc-200 uppercase tracking-wider">L</th>
            <th className="p-2 text-center text-xs font-bold text-zinc-600 dark:text-zinc-200 uppercase tracking-wider">Pts</th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-zinc-900 divide-y divide-zinc-200">
          {data?.map((table, index) => (
            <tr key={index} className="text-sm text-zinc-600 dark:text-zinc-300">
              <td className="p-2 text-center">{table.position}</td>
              <td className="p-2 text-left flex items-center">
                <div className="mr-2 w-8 h-8 relative">
                  <Image
                    src={table.team?.crest!}
                    alt={table.team?.tla!}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <p className="text-xs font-medium">{table.team?.shortName}</p>
              </td>
              <td className="p-2 text-center">{table.playedGames}</td>
              <td className="p-2 text-center">{table.won}</td>
              <td className="p-2 text-center">{table.draw}</td>
              <td className="p-2 text-center">{table.lost}</td>
              <td className="p-2 text-center font-medium">{table.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeagueStandings;
