import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import DropdownMenuDemo from './components/Dropdown';
import FilterLabel from './components/FilterLabel';
import data from './data/cards.json'

let teams = [];
const labels = data.players.reduce((grouped, item) => {
  const { team } = item;

  if(!teams.includes(team)) {
    teams.push(team)
  }

  if (!grouped[team]) {
    // If the category does not exist in the grouped object, create a new array for that category.
    grouped[team] = [];
  }

  // Push the item into the corresponding category array.
  grouped[team].push(item);

  return grouped;
}, {})

function App() {
  const [filterTeams, setFilterTeams] = useState([]);
  const [filterPlayers, setFilterPlayers] = useState([]);
  useEffect(() => {
    if(filterTeams?.length !== 0) {
      setFilterPlayers(data?.players?.filter(player => filterTeams?.includes(player?.team)));
    }
    else {
      setFilterPlayers(data?.players);
    }
  }, [filterTeams]);

  console.log(filterTeams);
  return (
    <>
      <div className='w-full min-h-screen bg-gradient-to-b from-slate-100 to-gray-800 pt-4 flex flex-col gap-10'>
        <div className='w-full px-8 pt-2'>
          <DropdownMenuDemo teams={teams} filterTeams={filterTeams} setFilterTeams={setFilterTeams}/>
          <div className='pt-3 w-3/4 flex flex-wrap gap-2'>
            <h2>Selected Teams:</h2>
            {filterTeams?.map((team, key) => (
              <FilterLabel key={key} team={team} filterTeams={filterTeams} setFilterTeams={setFilterTeams}/>
            ))}
          </div>
        </div>
        <div className='group w-full h-full p-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-6 2xl:grid-cols-5'>
          {filterPlayers?.length !== 0 ? (filterPlayers?.map((player, key) => (
            <Card key={key} player={player} />
          ))) :
          (
            <h3 className='text-center'>No players available!</h3>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
