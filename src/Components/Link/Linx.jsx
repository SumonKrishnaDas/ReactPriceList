import React from 'react';


const Linx = ({route}) => {
    return (
   <li  className='mr-10  hover:bg-purple-600'  >
<a href={route.path}>{route.name}</a>

   </li>
    );
};

export default Linx;