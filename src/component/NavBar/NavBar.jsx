import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai';

const NavBar = () => {
      const[open,setOpen] = useState(false)

      const routing = [
            { path: '/home', id: 1, name: 'Home' },
            { path: '/about', id: 2, name: 'About' },
            { path: '/products', id: 3, name: 'Products' },
            { path: '/contact', id: 4, name: 'Contact' },
            { path: '/services', id: 5, name: 'Services' }
          ];
      
          
      return (
            <nav className="text-black">
                <div className="md:hidden text-2xl bg-yellow-300 p-6" onClick={()=> setOpen(!open)}>
                  {
                        open=== true? 
                        <AiOutlineClose></AiOutlineClose>
                        : <AiOutlineMenu></AiOutlineMenu>
                  }
                    
                
                </div>
                  <ul className={`md:flex absolute md:static duration-1000
                  ${open?'top-16':'-top-60'}
                  bg-yellow-200 mx-2 px-6`}>
                        {
                              routing.map(route => <Link key={route.id} route={route}></Link>)
                        }
                  </ul>
            </nav>
      );
};

export default NavBar;