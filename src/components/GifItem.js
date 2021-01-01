import React from 'react'

export const GifItem = ({id,title,imageUrl}) => {
    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={imageUrl} alt={title}></img>
            <p>{title}</p>
        </div>
        
    )
}
