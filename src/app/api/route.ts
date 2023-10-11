import { options } from "@/lib/utils";

//get matches
export const getMatches = async () => {
  const res = await fetch(`https://api.football-data.org/v4/matches`, options);

  if (!res.ok) {
    return "error";
  }

  return res.json();
};

export const getCompetition = async ({ code }: { code: string }) => {
  const res = await fetch(
    `https://api.football-data.org//v4/competitions/${code}/matches`,
    options
  );

  if (!res.ok) {
    return "error";
  }

  return res.json();
};

//get match ended
export const getMatchesFootballFinished = async () => {
  const res = await fetch(
    `https://api.football-data.org/v4/matches?date=YESTERDAY`,
    options
  );
  if (!res.ok) {
    return "error";
  }
  return res.json();
};

export const getStandings = async ({ code }: { code: string }) => {
  const res = await fetch(
    `https://api.football-data.org/v4/competitions/${code}/standings`,
    options
  );
  if (!res.ok) {
    return "error";
  }
  return res.json();
};

//get competition ?
export const getPl = getCompetition({ code: "PL" }); //premier league
export const getBSA = getCompetition({ code: "BSA" }); //brazil
export const getBL1 = getCompetition({ code: "BL1" }); //bundesliga
export const getELC = getCompetition({ code: "ELC" }); //champion ship
export const getPD = getCompetition({ code: "PD" }); //laliga
export const getFL1 = getCompetition({ code: "FL1" }); //ligue 1
export const getSA = getCompetition({ code: "SA" }); // serie a

//get standings?
export const getPlStandings = getStandings({ code: "PL" }); //premier league

// get news
export const getNewsInfo = async ({ page }: { page: number }) => {
  const newsData = await fetch(
    `https://newsapi.org/v2/everything?apiKey=${process.env.NEWS_API_KEY}&q=soccer&pageSize=${page}`,
    { cache: "no-cache" }
  );
  if (!newsData.ok) {
    return "error";
  }
  return newsData.json();
};
