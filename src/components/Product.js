import React from 'react';

const Product = ({ spanText, image, name, price }) => {
    return (
        <article>
            <span>{spanText}</span>
            <img src={image} alt="bag"/>
            <p>{name}</p>
            <h4>{price}</h4>
        </article>
    )
}

export default Product;