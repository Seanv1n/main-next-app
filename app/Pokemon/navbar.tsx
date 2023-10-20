import React from 'react'
import PokemonData from './components/PokemonData'

const navbar = () => {

    return (
        <nav className='bg-gray-800 text-white hidden md:block w-1/4 p-2'>
            <div className='flex justify-between'>
                <p>This is Navbar</p>
                <button>Hide</button>
            </div>
            <div className='flex justify-between'>
                <button className='m-auto p-5'>Battle Usage</button>
                <button className='m-auto p-5'>Tournament Usage</button>
            </div>
            <div className='w-full'>
                <select className=' bg-gray-700 p-2'>
                    <option>Pokemon Showdown</option>
                </select>
            </div>
            <div className='w-full'>
                <input className='bg-gray-700 p-2 m-2' type='text' placeholder='Search Pokemon' />
            </div>
            <PokemonData />
        </nav>
    )
}

export default navbar