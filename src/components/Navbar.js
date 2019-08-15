import React from "react";
import { NavLink } from "react-router-dom";
export default function Navbar() {
	return (
		<div>
			<NavLink to="/user/hari/chakka" exact activeStyle={Style.Color}>
				Goto User Hari
			</NavLink>
			<br />
			<NavLink to="/about" exact activeStyle={Style.Color}>
				About
			</NavLink>
			<br />
			<NavLink exact to="/" activeStyle={Style.Color}>
				Home
			</NavLink>
		</div>
	);
}

const Style = {
	Color: { color: "green" }
};
