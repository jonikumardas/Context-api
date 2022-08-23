import React from 'react';
import Brother from '../Brother/Brother';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';

const Father = ({house,Aurnamant}) => {
    return (
        <div>
            <h2>
               Father 
            </h2>
            <p>house: {house}</p>
            <div style={{display:'flex'}}>
                <Myself house={house} Aurnamant={Aurnamant}></Myself>
                <Sister house={house}></Sister>
                <Brother house={house}></Brother>
            </div>
        </div>
    );
};

export default Father;