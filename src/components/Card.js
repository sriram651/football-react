import React from 'react'

export default function Card({ player }) {
    return (
        <>
            <div
                className='flex flex-col bg-gradient-to-t from-fuchsia-500 to-cyan-500 border border-gray-500 rounded-lg p-4 min-h-max shadow-xl transition duration-150 hover:brightness-110 hover:scale-110 hover:backdrop:lur-lg'
                >
                <div className='w-full h-64'>
                    <img
                        src={player?.image}
                        alt='img'
                        className='object-cover object-center w-full h-full rounded-lg'
                        height={400}></img>
                </div>
                <div className='py-2'>
                    <h1 className='w-full text-xl text-black font-medium flex justify-between'><span className='w-3/4 whitespace-nowrap overflow-hidden text-ellipsis'>{player?.name}</span> <span className='mx-2 text-base font-semibold'>{player?.position}</span></h1>
                    <h3 className='text-lg text-gray-700 font-medium'>{player?.team} <span className='font-normal'>- {player?.league}</span></h3>
                    <h4>Career Goals: <span className='font-semibold text-black'>{player?.goals}</span></h4>
                </div>
            </div>
        </>
    )
}
