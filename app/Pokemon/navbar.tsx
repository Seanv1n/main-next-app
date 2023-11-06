import React from 'react'
import { promises as fs } from 'fs';
import PokemonData from './Home/components/PokemonData'

interface Pokemon {
    name: string
}

const navbar = async () => {
    const currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth() - 1);

    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth()).toString().padStart(2, '0');
    const file = await fs.readFile(process.cwd() + `/app/Pokemon/python/json/output${year}-${month}.json`, 'utf8');
    const data = JSON.parse(file);

    return (
        <nav className='bg-gray-800 text-white hidden tablet:block w-1/4 p-2'>
            <div className='flex justify-between'>
                <button className='m-auto py-3'>Battle Usage</button>
                <button className='m-auto py-3'>Tournament Usage</button>
            </div>
            <div className='w-full'>
                <select className='bg-gray-700'>
                    <option>Pokemon Showdown</option>
                </select>
            </div>
            <PokemonData data={data} />
        </nav>
    )
}

export default navbar