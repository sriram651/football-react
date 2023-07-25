import { Cross2Icon } from '@radix-ui/react-icons'
import React from 'react'

export default function FilterLabel({team, filterTeams, setFilterTeams}) {

    function removeTeam(team) {
        let teams = filterTeams?.filter((item) => item !== team);
        setFilterTeams(teams);
    }
    return (
        <>
            <div 
                className='flex gap-2 border rounded-sm px-1 cursor-pointer bg-gradient-to-br from-fuchsia-500 to-cyan-500 text-gray-800 hover:border-black hover:rounded-md text-center items-center'
            >
                <span>{team}</span>
                <Cross2Icon onClick={() => removeTeam(team)}/>
            </div>
        </>
    )
}
