import React from 'react';
import './Revew.css'

const RevewCard = ({tShart,removeItem}) => {
    // console.log(tShart)
    return (
        <div id='calculaotin'>
            <h2>Total amount</h2>
            {
                tShart.map(Tshart=>
                <h4>{Tshart.name} <button onClick={()=>removeItem(Tshart)}>X</button></h4>
                )
            }
            
        </div>
    );
};

export default RevewCard;