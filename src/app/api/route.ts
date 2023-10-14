import { options } from "@/lib/utils";

//get matches
export const getMatches = async () => {
  const res = await fetch(`https://api.football-data.org/v4/matches`, options);

  if (!res.ok) {
    return "error";
  }

  return res.json();
};

export const getCompetition = async ({ league }: leagueProps) => {
  const res = await fetch(
    `https://api.football-data.org//v4/competitions/${league}/matches`,
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

export const getStandings = async ({ league }: leagueProps) => {
  const res = await fetch(
    `https://api.football-data.org/v4/competitions/${league}/standings`,
    options
  );
  if (!res.ok) {
    return "error";
  }
  const data = await res.json();
  return data.standings;
};

//get competition ?
// export const getPl = getCompetition({ code: "PL" }); //premier league
// export const getBSA = getCompetition({ code: "BSA" }); //brazil
// export const getBL1 = getCompetition({ code: "BL1" }); //bundesliga
// export const getELC = getCompetition({ code: "ELC" }); //champion ship
// export const getPD = getCompetition({ code: "PD" }); //laliga
// export const getFL1 = getCompetition({ code: "FL1" }); //ligue 1
// export const getSA = getCompetition({ code: "SA" }); // serie a

// //get standings?
// export const getPlStandings = getStandings({ code: "PL" }); //premier league
// export const getBSAStandings = getStandings({ code: "BSA" }); //brazil
// export const getBL1Standings = getStandings({ code: "BL1" }); //bundesliga
// export const getELCStandings = getStandings({ code: "ELC" }); //champion ship
// export const getPDStandings = getStandings({ code: "PD" }); //laliga
// export const getFL1Standings = getStandings({ code: "FL1" }); //ligue 1
// export const getSAStandings = getStandings({ code: "SA" }); //serie a

// get news
export const getNewsInfo = async ({ page }: { page: number }) => {
  const newsData = await fetch(
    `https://newsapi.org/v2/everything?apiKey=${process.env.NEWS_API_KEY}&q=soccer&pageSize=${page}`,
    { next: { revalidate: 30 } }
  );
  if (!newsData.ok) {
    return "error";
  }
  return newsData.json();
};
