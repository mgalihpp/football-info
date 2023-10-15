type optionsProps = {
  next?: { revalidate: number };
  cache?: string | any;
  headers: {
    "X-Auth-Token": string | any;
    "Content-Type": string | any;
  };
};

type matchesArea = {
  id?: number;
  name: string;
};

type matchesCompetition = {
  id?: number;
  name: string;
  emblem: string;
};

type matchesHomeTeam = {
  id?: number;
  name: string;
  crest: string;
};

type matchesAwayTeam = {
  id?: number;
  name: string;
  crest: string;
};

type scores = {
  fullTime: {
    home: number;
    away: number;
  };
  halftime: {
    home: number;
    away: number;
  };
};

type matchesType = {
  area: matchesArea;
  competition: matchesCompetition;
  id: number;
  utcDate: string;
  status: "TIMED" | "FINISHED";
  matchday?: number;
  homeTeam?: matchesHomeTeam;
  awayTeam?: matchesAwayTeam;
  score?: scores;
};

type newsType = {
  title: string;
  url: string;
  urlToImage: string;
};

type teamType = {
  id?: number;
  name?: string;
  shortName?: string;
  tla?: string;
  crest?: string;
};

type Table = {
  position?: number;
  team?: teamType;
  playedGames?: number;
  form?: null;
  won?: number;
  draw?: number;
  lost?: number;
  points?: number;
  goalsFor?: number;
  goalsAgainst?: number;
  goalDifference?: number;
};

type Standings = {
  table?: Table[];
};

type textProps = {
  text: "Today" | "Upcoming" | "Finished" | "Standing";
};

/** 
A type props that represents the league names and codes.
@property league
**/
type leagueProps = {
  /**
@property {string} PL - Premier League
@property {string} BSA - Brasileirão Serie A
@property {string} BL1 - Bundesliga
@property {string} ELC - English Football League Championship
@property {string} PD - La Liga
@property {string} FL1 - Ligue 1
@property {string} SA - Serie A 
**/
  league: string | undefined;
};
