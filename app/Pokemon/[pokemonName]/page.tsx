import React, { FC } from 'react'
import { promises as fs } from 'fs';
import Image from 'next/image';

interface pageProps {
    params: { pokemonName: string }
}

interface pokemonInfo {
    name: string,
    abilities: [
        name: string,
        percentage: string
    ],
    items: [
        name: string,
        percentage: string
    ],
    spreads: [
        name: string,
        percentage: string
    ],
    moves: [
        name: string,
        percentage: string
    ],
    teammates: [
        name: string,
        percentage: string
    ],
}

const page: FC<pageProps> = async ({ params }) => {
    var pokemon = decodeURIComponent(params.pokemonName);

    const currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth() - 1);

    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    // const file = await fs.readFile(process.cwd() + `/app/Pokemon/python/json/output${year}-${month}.json`, 'utf8');
    let file;
    let data;
    try {
        file = await fs.readFile(process.cwd() + `/app/Pokemon/python/json/output${year}-${month}.json`, 'utf8');
        try {
            data = JSON.parse(file);
        } catch (error) {
            data = '';
        }
    } catch (error) {
        data = '';
    }
    let URIname = pokemon.toLowerCase().replace(/\s+/g, '-')

    const incarnate = ['landorus', 'tornadus', 'thundurus'];
    const male = ['meowstic', 'indeedee', 'basculegion', 'oinkologne'];
    const female = ['meowstic-f', 'indeedee-f', 'basculegion-f', 'oinkologne-f'];
    const mask = ['ogerpon-wellspring', 'ogerpon-hearthflame', 'ogerpon-cornerstone'];
    const breed = ['tauros-paldea-combat', 'tauros-paldea-aqua', 'tauros-paldea-blaze'];
    if (incarnate.includes(URIname)) {
        URIname = URIname + '-incarnate'
    }
    if (male.includes(URIname)) {
        URIname = URIname + '-male'
    }
    if (female.includes(URIname)) {
        URIname = URIname + 'emale'
    }
    if (mask.includes(URIname)) {
        URIname = URIname + '-mask'
    }
    if (breed.includes(URIname)) {
        URIname = URIname + '-breed'
    }
    if (URIname === 'urshifu') {
        URIname = URIname + '-single-strike'
    }

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${URIname}`)
    const pokeapiRes = await res.json();

    const result: pokemonInfo = data.find((item: { name: string; }) => item.name === pokemon);
    return (
        <article className='h-full w-full overflow-auto bg-gray-700 text-white p-2'>
            <div className='text-xl m-2 flex items-center'>
                <Image src={pokeapiRes.sprites.front_default ? pokeapiRes.sprites.front_default : ''} width={200} height={200} alt='pokemon_sprite' />
                <div>{result ? result.name : ''}</div>
                <ul>{pokeapiRes.types.map((col: { type: any }, i: React.Key) => {
                    return (
                        <li key={i} className={'type-' + col.type.name}>{col.type.name}</li>
                    )
                })}</ul>
            </div>
            <div className='grid grid-cols-2 justify-center'>
                <ul className='m-2 px-7'>{result ? result.abilities.map((col: any, i) => {
                    return (
                        <li className='w-full flex justify-between' key={i}><span>{col.name}</span><span>{col.percentage}</span></li>
                    )
                }) : ''}</ul>
                <ul className='m-2 px-7'>{result ? result.items.map((col: any, i) => {
                    return (
                        <li className='w-full flex justify-between' key={i}><span>{col.name}</span><span>{col.percentage}</span></li>
                    )
                }) : ''}</ul>
                <ul className='m-2 px-7'>{result ? result.moves.map((col: any, i) => {
                    return (
                        <li className='w-full flex justify-between' key={i}><span>{col.name}</span><span>{col.percentage}</span></li>
                    )
                }) : ''}</ul>
                <ul className='m-2 px-7'>{result ? result.spreads.map((col: any, i) => {
                    return (
                        <li className='w-full flex justify-between' key={i}><span>{col.name}</span><span>{col.percentage}</span></li>
                    )
                }) : ''}</ul>
                <ul className='m-2 px-7'>{result ? result.teammates.map((col: any, i) => {
                    return (
                        <li className='w-full flex justify-between' key={i}><span>{col.name}</span><span>{col.percentage}</span></li>
                    )
                }) : ''}</ul>
            </div>
        </article>
    )
}

export default page