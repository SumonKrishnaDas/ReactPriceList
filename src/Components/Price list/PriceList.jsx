import React, { useEffect, useState } from 'react';
import PriceCard from'./Price card/PriceCard'
const PriceList = () => {


const [prices,setPrices] = useState([]);

useEffect(()=>{

    fetch('prices.json')
    .then( res => res.json() )
    .then( data => setPrices(data))

},[])


    return (
        <div>

<h2  className='text-5xl bg-purple-300 font-bold ' > Awesome Affordable Prices   </h2>


<div className='grid md:grid-cols-3 gap-3  ' >
    
    
    
{




prices.map( price => <PriceCard price={price} key={price.id}></PriceCard>)
}

    </div>         
        </div>
    );
};

export default PriceList;