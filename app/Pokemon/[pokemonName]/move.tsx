import React from 'react'

const Move = async ({ move }) => {
    let URIname = move.toLowerCase().replace(/\s+/g, '-')
    let pokeapiRes
    if(URIname !== 'other') {
        const res = await fetch(`https://pokeapi.co/api/v2/move/${URIname}`)
        pokeapiRes = await res.json();
    } else {
        pokeapiRes = {
            type: {
                name : ''
            }
        }
    }

    return (
        <span className={'type-' + pokeapiRes.type.name + ' w-1/3'}>
            {pokeapiRes.type.name}
        </span>
    )
}

export default Move