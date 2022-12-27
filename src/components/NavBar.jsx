import React from "react";
import { Link } from 'react-router-dom'
const NavBar = () => (
	<nav>
		<Link to='/'>Comic Logo</Link>
		<Link to='comics'>Comics</Link>
		<a className='login-button' href='#'>
			Iniciar Sesión
		</a>
	</nav>
);
export default NavBar
