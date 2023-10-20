import React from 'react'
import { promises as fs } from 'fs';
import Link from 'next/link';

interface Pokemon {
    name: string
}

const PokemonData = async () => {
    const currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth() - 1);

    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const file = await fs.readFile(process.cwd() + `/app/Pokemon/python/json/output${year}-${month}.json`, 'utf8');
    const data = JSON.parse(file);

    return (
        <div className='overflow-auto h-3/4'>
        {data.map((pokemon: Pokemon, i: number) => {
            return (
                <div  key={i}>
                <Link href={'/Pokemon/' + pokemon.name}>
                    {pokemon.name}
                </Link>
                </div>
            )
        })}
        </div>
    )
}

export default PokemonData