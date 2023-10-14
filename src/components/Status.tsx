"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import LeagueTable from "./LeagueTable";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import LeagueStandings from "./LeagueStandings";

const Status = ({
  getMatches,
  getMatchesFinished,
  standings,
}: {
  getMatches?: matchesType[];
  getMatchesFinished?: matchesType[];
  standings?: Table[];
}) => {
  const [statusMatch, setStatusMatch] = useState<string | null>("Today");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [itemsToShow, setItemsToShow] = useState<number>(5);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedStatusMatch = localStorage.getItem("statusMatch");
      if (storedStatusMatch !== null) {
        setStatusMatch(storedStatusMatch);
      }
    }
  }, []);

  const setUpdateStatusFilter = (filter: string) => {
    setStatusMatch(filter);
    setItemsToShow(5);
    localStorage.setItem("statusMatch", filter);
  };

  const loadMore = () => {
    setIsLoading(true);
    setItemsToShow((prevItems) => prevItems + 5);

    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  const filteredMatchesList = getMatches?.filter((match) => {
    if (statusMatch === "Upcoming" && match.status === "TIMED") return true;
    if (statusMatch === "Finished" && match.status === "FINISHED") return true;
    if (statusMatch === "Today" && match.status !== "FINISHED") return false;
    return false;
  });

  if (statusMatch === "Finished") {
    filteredMatchesList?.reverse();
  }

  const buttonList: textProps[] = [
    {
      text: "Today",
    },
    {
      text: "Upcoming",
    },
    {
      text: "Finished",
    },
    {
      text: "Standing",
    },
  ];

  const filterStanding = standings?.filter(() => {
    if (statusMatch === "Standing") return true;
    return false;
  });

  return (
    <div>
      <div className="w-[350px] sm:w-full flex gap-2 overflow-x-auto">
        {buttonList.map((status) => (
          <Button
            key={status.text}
            aria-label={status.text}
            variant="status"
            size="sm"
            className={cn("flex", {
              "bg-primary text-secondary hover:text-secondary hover-bg-primary/95":
                statusMatch === status.text,
            })}
            onClick={() => setUpdateStatusFilter(status.text)}
          >
            {status.text}
          </Button>
        ))}
      </div>
      {/* </div> */}
      <div className="w-[350px] max-w-full sm:w-full">
        {filteredMatchesList && filteredMatchesList.length > 0 ? (
          filteredMatchesList.slice(0, itemsToShow).map((match) => (
            <div key={match.id}>
              <LeagueTable getMatch={match} />
            </div>
          ))
        ) : filterStanding && filterStanding.length > 0 ? (
          <LeagueStandings getStanding={standings ?? []} />
        ) : (
          <div className="text-center mt-6">
            <p>
              Match Not Found <br /> Please Try again later {":)"} <br /> or
              select any specific leagues
            </p>
          </div>
        )}
        {filteredMatchesList && itemsToShow < filteredMatchesList.length && (
          <Button
            className="flex items-center justify-center mx-auto my-6"
            onClick={loadMore}
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              "Load More..."
            )}
          </Button>
        )}
      </div>
    </div>
  );
};

export default Status;
