import React, { useState } from 'react';
import CoustomHook from '../../hooks/CoustomHook';
import Product from './Product';
import './Product.css'
import RevewCard from './Revewcard/RevewCard';
const Card = () => {
    const [teshart, setShart]=CoustomHook();
    const [tShart, setTshart]=useState([])
    const EventHandeler=(seletedItems)=>{
        const products=tShart.find(produt=>produt._id===seletedItems._id);
        if(!products){
            const Newshart=[...tShart,seletedItems]
       setTshart(Newshart);
        }
        else{
            alert('Hay you already add this product');
        }
        

    }

    const removeItem=(seletedItems)=>{
        const restItems=tShart.filter(Tshart=> Tshart._id !== seletedItems._id);
        setTshart(restItems);
    }
    const RemoveAll=()=>{

        let items=tShart;
        items=[];
        setTshart(items);

     }
    return (
        <div>
             <h1>This mariya t-shart : {teshart.length} </h1>
            <div className='container'>
            <div className='Products'>
                {
                    teshart.map(shart=><Product key={shart._id}
                        shart={shart}
                        EventHandeler={EventHandeler}

                        ></Product>)
                }
            </div>
            <div className='card-calculation'>
               <RevewCard tShart={tShart}
               removeItem={removeItem}
               RemoveAll={ RemoveAll}
               ></RevewCard>
                
            </div>
            </div>
            
        </div>
    );
};

export default Card;