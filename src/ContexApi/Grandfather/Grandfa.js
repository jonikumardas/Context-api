import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'
export const DemandAble=createContext('Ring');

const Grandfa = () => {
    const [house, setHouse]=useState(1);
    const HandleByehouse=()=>{
        const Buy=house+1;
        setHouse(Buy);
    }
    const Aurnamant='Dimond ring';
    return (

    // context api use korta hola ammka aga akta variable declear korta hoba and tar por variable ar akta nam deta hoba. 
    //  and ai nam deyai por a kono kata component a access korta hoba.. 

    // stap 1: export;
    // stap 2: createContext() 
    // stap 3: variable name .(dote) provider deya deya ami jai wrape korta hoba 
    // stap 4: akta value deta hoba (aita dynamic o hota para ba hard coded o hota para)

    // for access
    
    // stap 1: ami j component a value golo k use korta cai ai component a jata hoba 
    // stap 2: const variabelename = useContext( ai khana j variable ar nam deya parent component a export korcelam) 
        <DemandAble.Provider value={Aurnamant}>  
        <div className='grandpa'>
            <h2>Grand pa </h2>
            <p>House :{house}</p><button onClick={HandleByehouse}>Buy house</button>
            <div  style={{ display: "flex"}}>
            <Father house={house} Aurnamant={Aurnamant}></Father>
                <Aunty house={house}></Aunty>
                <Uncle house={house}></Uncle>
            </div>
              
        </div>
        </DemandAble.Provider>
    );
};

export default Grandfa;