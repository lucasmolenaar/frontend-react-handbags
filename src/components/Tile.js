import React from 'react';

const Tile = ({image, title, p1, p2}) => {
    return (
        (image) ?
            <section>
                <img src={image} alt="tile"/>
            </section>
        :
            <section>
                <h2>{title}</h2>
                <p>{p1}</p>
                <p>{p2}</p>
            </section>
    )
}

export default Tile;