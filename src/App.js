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
  console.log(teams)
  return (
    <>
      <div className='w-full h-full bg-gradient-to-b from-slate-100 to-gray-800 pt-4 flex flex-col gap-10'>
        <div className='w-full px-8 pt-2'>
          <DropdownMenuDemo teams={teams}/>
          <div className='pt-3 w-3/4 flex flex-wrap gap-2'>
            <h2>Selected Teams:</h2>
            {teams?.map((team, key) => (
              <FilterLabel key={key} team={team}/>
            ))}
          </div>
        </div>
        <div className='group w-full h-full p-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-6 2xl:grid-cols-5'>
          {data?.players?.map((player, key) => (
            <Card key={key} player={player} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
