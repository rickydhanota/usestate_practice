 import React, { useState } from 'react';

const Classexample = (props) => {
    const [ inStock, setInStock ] = useState(5);

    return (
        <div>
            <h2>{ props.title }</h2>
            <p>Description: { props.desc }</p>
            <p>Cost: ${ props.cost }</p>
            <p>In Stock: {inStock}</p>
            <button onClick ={(event) => setInStock(inStock - 1)}>Buy {props.title}!</button>
        </div>
    );
};

export default Classexample;