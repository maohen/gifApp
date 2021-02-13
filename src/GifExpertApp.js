import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ()=>{

    const [categories, setCategories] = useState(['']);

    // const handleAddCategory= ()=>{
    //     setCategories(['Samurai X', ...categories]);
    // }

    return(
        <>
            <h2>Gif App</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

            {/* <button onClick={handleAddCategory}>
                
                Agregar
            </button> */}

            {categories.map( category =>
                <GifGrid key={category} category={category} />
            )
            }

        </>
    )
}

export default GifExpertApp