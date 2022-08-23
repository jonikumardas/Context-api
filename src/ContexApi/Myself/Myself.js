import React from 'react';
import Spacial from '../Spacial/Spacial';

const Myself = ({house,Aurnamant}) => {
    return (
        <div>
            <h2>Myself </h2>
            <p>house : {house}</p>
            <Spacial Aurnamant={Aurnamant}></Spacial>
        </div>
    );
};

export default Myself;