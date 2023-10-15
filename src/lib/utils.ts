import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const options: optionsProps = {
  next: { revalidate: 30 },
  headers: {
    "X-Auth-Token": process.env.FOOTBALL_API_KEY,
    "Content-Type": "application/json",
  },
};

const date = new Date();
export const dateConvert = date.toDateString();

export const Leagues = [
  {
    id: 1,
    name: "Premier League",
    href: "premierleague",
    code: "PL",
    emblem: "/img/leagues/premier_league.webp",
  },
  {
    id: 2,
    name: "Primera Division",
    href: "laliga",
    code: "PD",
    emblem: "/img/leagues/laliga.svg",
  },
  {
    id: 3,
    name: "Bundesliga",
    href: "bundesliga",
    code: "BL1",
    emblem: "/img/leagues/bundesliga.webp",
  },
  {
    id: 4,
    name: "Serie A",
    href: "seriea",
    code: "SA",
    emblem: "/img/leagues/serie_a.webp",
  },
  {
    id: 5,
    name: "Ligue 1",
    href: "liguea",
    code: "FL1",
    emblem: "/img/leagues/ligue_1.webp",
  },
  {
    id: 6,
    name: "Champion Ship",
    href: "championship",
    code: "ELC",
    emblem: "/img/leagues/championship.webp",
  },
  {
    id: 7,
    name: "Brazilian Championship Series A",
    href: "brazillianseriesa",
    code: "BSA",
    emblem: "/img/leagues/brazilian_serie_a.webp",
  },
  {
    id: 8,
    name: "UEFA Champions League",
    href: "ucl",
    code: "UCL",
    emblem: "/img/leagues/ucl.webp",
  },
  {
    id: 9,
    name: "News",
    href: "/news",
    emblem: "/img/news-football.webp",
  },
];

export const slideSetting = {
  dots: true,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
};
