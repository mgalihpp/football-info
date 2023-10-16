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

export const getTopScore = async ({ league }: leagueProps) => {
  const res = await fetch(
    `https://api.football-data.org/v4/competitions/${league}/scorers`,
    options
  );
  if (!res.ok) {
    return "error";
  }
  return await res.json();
};

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
