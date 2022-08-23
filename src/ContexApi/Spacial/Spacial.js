import React, { useContext } from 'react';
import { DemandAble } from '../Grandfather/Grandfa';

const Spacial = () => {
    const aunrmant=useContext(DemandAble)
    return (
        <div>
            <h5>Spacial </h5>
            <p>Gift:{aunrmant}</p>

        </div>
    );
};

export default Spacial;