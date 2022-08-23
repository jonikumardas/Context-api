import React, { useContext } from 'react';
import { DemandAble } from '../Grandfather/Grandfa';

const Aunty = ({house}) => {
    const aurnament=useContext(DemandAble);
    return (
        <div>
            <h2>Aunty </h2>
            <p>house: {house}</p>
            <p>Gift: {aurnament}</p>
        </div>
    );
};

export default Aunty;