import Competition from "./Competition"
import Matches from "./Matches"

const LeagueTable = ({data}: {data: matchesType}) => {
  return (
    <div className="py-3 px-2 md:px-3 rounded-md flex flex-col bg-zinc-100 dark:bg-zinc-900 shadow-xl">
        <Competition data={data}/>
        <Matches data={data}/>
    </div>
  )
}

export default LeagueTable