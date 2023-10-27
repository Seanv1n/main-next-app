"use client"
import React, { useEffect, useState } from 'react'
import pokemonDataSet from './pokemon_v4.js'

type pokeapiRes = {
  count: number,
  next: string | null,
  prev: string | null,
  results: {
    name: string,
    url: string
  }[]
}

const Pokedex = () => {
  const dataSet = pokemonDataSet
  const [pokemonData, setPokemonData] = useState(dataSet)

  const handleChange = (event: { target: { value: any; }; }) => {
      const filteredData = filterData(event.target.value);
      setPokemonData(filteredData);
    }

  function filterData(inputText: string) {
      inputText = inputText.toLowerCase();
      return Object.keys(dataSet)
        .filter(key => dataSet[key].toLowerCase().includes(inputText))
        .map(key => dataSet[key]);
    }

  const getData = () => fetch('https://play.pokemonshowdown.com/data/pokedex.js')
  .then(response => response.json())
  .then(response => console.log(response))
  
  
  getData()
  return (
    <>
      <div className='bg-gray-800 w-full overflow-auto text-white'>
      <input onChange={handleChange} className='bg-gray-700 p-2 pr-0 my-2 w-full' type='text' placeholder='Search Pokemon' />
        {pokemonData.map((col, i) => {
          return (
            <div key={i}>
              {col}
            </div>
          )
        })}

      </div>
    </>
  )
}

export default Pokedex