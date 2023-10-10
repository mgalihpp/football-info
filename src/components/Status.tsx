"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import LeagueTable from "./LeagueTable";
import { cn } from "@/lib/utils";

const Status = ({
  matchesList,
  matchesListFinished,
}: {
  matchesList: matchesType[];
  matchesListFinished?: matchesType[];
}) => {
  const [statusMatch, setStatusMatch] = useState<string | null>("TODAY");

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedStatusMatch = localStorage.getItem("statusMatch");
      if (storedStatusMatch !== null) {
        setStatusMatch(storedStatusMatch);
      }
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  const setUpdateStatusFilter = (filter: string) => {
    setStatusMatch(filter);
    localStorage.setItem("statusMatch", filter);
  };

  return (
    <div>
      <div className="flex space-x-4 mb-2 md:mb-4">
        <Button
          aria-label="today"
          variant="status"
          size="sm"
          className={cn({
            "bg-primary text-secondary hover:text-secondary hover:bg-primary/95":
              statusMatch === "TODAY",
          })}
          onClick={() => setUpdateStatusFilter("TODAY")}
        >
          Today
        </Button>
        <Button
          aria-label="upcoming"
          variant="status"
          size="sm"
          className={cn({
            "bg-primary text-secondary hover:text-secondary hover:bg-primary/95":
              statusMatch === "UPCOMING",
          })}
          onClick={() => setUpdateStatusFilter("UPCOMING")}
        >
          Upcoming
        </Button>
        <Button
          aria-label="finished"
          variant="status"
          size="sm"
          className={cn({
            "bg-primary text-secondary hover:text-secondary hover:bg-primary/95":
              statusMatch === "FINISHED",
          })}
          onClick={() => setUpdateStatusFilter("FINISHED")}
        >
          Finished
        </Button>
      </div>
      <div className="w-full">
        {statusMatch === "TODAY" && matchesList.length > 0 ? (
          <div className="text-center">
            <p>
              Match Not Found until 21 oct <br /> Please Try again later {":)"}{" "}
              <br /> or select specific leagues
            </p>
          </div>
        ) : null}

        {statusMatch === "UPCOMING"
          ? matchesList.map((data) => (
              <div key={data.id}>
                {data.status === "TIMED" && <LeagueTable data={data} />}
              </div>
            ))
          : null}

        {statusMatch === "FINISHED" && matchesListFinished === undefined ? (
          <div className="text-center">
            <p>
              Match Not Found until 21 oct <br /> Please Try again later {":)"}{" "}
              <br /> or select specific leagues
            </p>
          </div>
        ) : null}

        {/* used this when the data if already exits */}
        {/* {statusMatch === "FINISHED"
          ? matchesListFinished?.map((data) => (
              <div key={data.id}>
                {data.status === "FINISHED" && <LeagueTable data={data} />}
              </div>
            ))
          : null} */}
      </div>
    </div>
  );
};

export default Status;
