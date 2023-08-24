import React, { useState } from 'react';

import Linx from'../Link/Linx'
import { Bars4Icon,XMarkIcon} from '@heroicons/react/24/solid'

const Navbar = () => {

const [open,setopen] = useState(false);
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' }
      ];
      

    return (

        <nav  className='bg-purple-400 '  > 
 <div   onClick={ ()=> setopen(!open) }  className='md:hidden'  >

<span>

  { open === true? 
   <XMarkIcon className="h-6 w-6 text-purple-500" />:
     <Bars4Icon className="h-6 w-6 text-purple-500" />
  
  }
</span>




 </div>




<ul className={`md:flex absolute  md:static  pl-8  pb-4  duration-700   bg-purple-400  ${ open? 'top-6':'-top-40'}`      } >

{
  routes.map(route => <Linx
  
  key={route.id}
  route={route}
  
  
  > </Linx> )

}


</ul>


        </nav>
  
    );
};

export default Navbar;