import React from 'react'
import { GifItem } from './GifItem'
import { useFetchGifs } from './hooks/useFetchGifs'

export const GifGrid = ({category}) => {

    const { data,loading}= useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>

            {loading && <p className="animate__animated animate__flipInX">Loading...</p>}
            <div className="container-card">
                {data.map( image=> (
                    <GifItem 
                        key={image.id}
                        {...image}/>
                ))}
            </div>
        </>
    )
}
