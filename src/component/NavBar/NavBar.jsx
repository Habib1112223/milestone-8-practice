import Link from "../Link/Link";

const NavBar = () => {
      const routing = [
            { path: '/home', id: 1, name: 'Home' },
            { path: '/about', id: 2, name: 'About' },
            { path: '/products', id: 3, name: 'Products' },
            { path: '/contact', id: 4, name: 'Contact' },
            { path: '/services', id: 5, name: 'Services' }
          ];
      
          
      return (
            <nav>
                  <ul className="md:flex">
                        {
                              routing.map(route => <Link key={route.id} route={route}></Link>)
                        }
                  </ul>
            </nav>
      );
};

export default NavBar;