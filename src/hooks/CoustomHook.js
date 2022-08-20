import { useEffect, useState } from 'react';

const CoustomHook = () => {
    const [teshart, setShart]=useState([]);
    useEffect(()=>{
        fetch('Tshart.json')
        .then(res=>res.json())
        .then(data=>setShart(data))
    },[]);
    return [teshart,setShart]
        
};

export default CoustomHook;