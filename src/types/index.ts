type optionsProps = {
    next?: {revalidate: number };
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
    status: string;
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
  