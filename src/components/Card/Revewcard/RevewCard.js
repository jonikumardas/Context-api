import React from 'react';
import './Revew.css'

const RevewCard = ({tShart,removeItem, RemoveAll}) => {
    // console.log(tShart)
    let comand;
    if(tShart.length===0){
        comand= <p>Oi kipta kiso kinos na kno??</p>
    }
    else if (tShart.length===2) {
        comand=<p>YAY!! you ar buying</p>
    }

    else{
        comand=<p>Please add more...</p>
    }
   
    return (
        <div id='calculaotin'>
            <h2>Total Item : {tShart.length}</h2>
            {
                tShart.map(Tshart=>
                <h4>{Tshart.name} <button onClick={()=>removeItem(Tshart)}>X</button></h4>
                )
            }
            {comand}
            {
                tShart.length<=2? <p>keep adding</p> : <button onClick={()=>RemoveAll()}> Clear all </button>
            }
            {
                tShart.length>=6 && <>Kaw k ki gift deba naki ..</>
            }
            {
                tShart.length>=5 || <>Tomaka deya akta pream o hoba na </>
            }
            
        </div>
    );
};

export default RevewCard;