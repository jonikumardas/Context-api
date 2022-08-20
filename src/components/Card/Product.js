import React, { useState } from 'react';

const Product = ({EventHandeler,shart}) => {
    const {price, picture, name}=shart;
    return (
        <div>
            <img src={picture} alt=""/>
            <h3>Name: {name}</h3>
            <h3>Price:{price}</h3>
            <button onClick={()=>EventHandeler(shart)}>Buy now </button>
        </div>
    );
};

export default Product;





// onClick={()=>EventHandeler(props.shart)}