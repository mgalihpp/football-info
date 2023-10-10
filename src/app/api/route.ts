import { options } from "@/lib/utils";

export const getCompetition = async ({ code }: { code: string }) => {
  const res = await fetch(
    `https://api.football-data.org//v4/competitions/${code}/matches`,
    options
  );

  if (!res) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

// get match ended
// export const getMatchesFootballFinished = async () => {
//   const matchData = await fetch(
//     `https://api.football-data.org/v4/matches?date=YESTERDAY`,
//     options
//   );
//   return matchData.json();
// };

//get competition ?
export const getPl = getCompetition({ code: "PL" }); //premier league
export const getBSA = getCompetition({ code: "BSA" }); //brazil
export const getBL1 = getCompetition({ code: "BL1" }); //bundesliga
export const getELC = getCompetition({ code: "ELC" }); //champion ship
export const getPD = getCompetition({ code: "PD" }); //laliga
export const getFL1 = getCompetition({ code: "FL1" }); //ligue 1
export const getSA = getCompetition({ code: "SA" }); // serie a
