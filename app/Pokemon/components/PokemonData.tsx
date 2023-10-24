'use client'
import React, { useState } from 'react';
import Link from 'next/link';
interface Pokemon {
    name: string
}

const PokemonData = ({ data }) => {
    const [pokemonData, setPokemonData] = useState(data)

    const handleChange = (event) => {
        // console.log(event.target.value)
        const filteredData = filterData(event.target.value);
        setPokemonData(filteredData);
    }

    function filterData(inputText) {
        inputText = inputText.toLowerCase();
        return Object.keys(data)
          .filter(key => data[key].name.toLowerCase().includes(inputText))
          .map(key => data[key]);
      }

    return (
        <>
            <div className='w-full'>
                <input onChange={handleChange} className='bg-gray-700 p-2 pr-0 my-2 w-full' type='text' placeholder='Search Pokemon' />
            </div>
            <div className='overflow-auto h-3/4'>
                {pokemonData.map((pokemon: Pokemon, i: number) => {
                    return (
                        <div key={i}>
                            <Link href={'/Pokemon/' + pokemon.name}>
                                {pokemon.name}
                            </Link>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default PokemonData