import React from "react";
import NavBar from "./NavBar";
import HeaderSection from './HeaderSection'
const Header = ({title, buttons}) => {
	return (
		<header>
			<NavBar />
			<HeaderSection title={title} buttons={buttons} />
		</header>
	);
};
export default Header;
