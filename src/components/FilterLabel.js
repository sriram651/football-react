import React from 'react'

export default function FilterLabel({team}) {
    return (
        <>
            <div 
                className='border rounded-sm px-1 cursor-pointer bg-gradient-to-br from-fuchsia-500 to-cyan-500 text-gray-800 hover:border-black hover:rounded-md'
            >
                <span>{team}</span>
                <span> </span>
            </div>
        </>
    )
}
