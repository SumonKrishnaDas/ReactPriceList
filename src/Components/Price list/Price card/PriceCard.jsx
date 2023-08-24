import React from 'react';
import Feature from '../../Feature/Feature';

const PriceCard = ({price}) => {
    return (
        <div  className='bg-indigo-400 mt-4 rounded-md p-4 py-6  flex flex-col'>

            {/* <h5 className='text-2xl font-bold'> {price.name} </h5> */}
            <h2 className='text-center' > 
            
            <span className='text-5xl font-extrabold text-purple-700 text-center'>   {price.price}  </span>
            <span  className='text-2xl   text-white font-bold ' > /mon</span>
            
            
          </h2>

<h1 className='text-2xl font-bold  text-center my-6'>{price.membershipType}</h1>
            {price.name}


<h1 className='   underline font-bold text-white  ' >Features: </h1>
{

    price.features.map((feature, idx) => <Feature key={idx} feature={feature}> </Feature>)
}
<button className='w-full bg-green-400 text-white py-2 rounded-md font-bold mt-auto hover:bg-green-600 '  > Buy Now</button>

        </div>
    );
};

export default PriceCard;