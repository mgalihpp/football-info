import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const options: optionsProps = {
  next: { revalidate: 300 },
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
    href: "/leagues/premierleague",
    emblem: "/img/leagues/premier_league.webp",
  },
  {
    id: 2,
    name: "Primera Division",
    href: "/leagues/laliga",
    emblem: "/img/leagues/laliga.svg",
  },
  {
    id: 3,
    name: "Bundesliga",
    href: "/leagues/bundesliga",
    emblem: "/img/leagues/bundesliga.webp",
  },
  {
    id: 4,
    name: "Serie A",
    href: "/leagues/seriea",
    emblem: "/img/leagues/serie_a.webp",
  },
  {
    id: 5,
    name: "Ligue 1",
    href: "/leagues/liguea",
    emblem: "/img/leagues/ligue_1.webp",
  },
  {
    id: 6,
    name: "Champion Ship",
    href: "/leagues/championship",
    emblem: "/img/leagues/championship.webp",
  },
  {
    id: 7,
    name: "Brazilian Championship Series A",
    href: "/leagues/brazillianseriesa",
    emblem: "/img/leagues/brazilian_serie_a.webp",
  },
  {
    id: 8,
    name: "UEFA Champions League",
    href: "/leagues/ucl",
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
