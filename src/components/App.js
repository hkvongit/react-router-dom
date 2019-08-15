import React from "react";
import { useState } from "react";
import { BrowserRouter, Route ,Redirect, Prompt} from "react-router-dom";
import Navbar from "./Navbar";
const User = (params) => {
	return (
		<div>
			<h4>User Page : {params.username}</h4>
			<h4>Fruit : {params.fruit}</h4>
			<Navbar />
		</div>
	);
};

const App = () => {
	const [Login, setLogin]=useState(false)
	return (
		<BrowserRouter>
			<div className="App">
				<Route
					path="/"
					exact
					strict
					render={() => {
						return (
							<div>
								<h2>Welcome Home</h2>
								<Navbar />
							</div>
						);
					}}
				/>
				<Route
					path="/about"
					exact
					strict
					render={() => {
						return (
							<div>
								<h2>About Page</h2>
								<Navbar />
							</div>
						);
					}}
				/>
				<Route 
					path="/user/:username/:fruit" 
					exact 
					render={
						({match})=>(
							Login ? (<User username={match.params.username}
							fruit={match.params.fruit}/>) 
							: (<Redirect to ="/"/>)
						)
					} />
				<Prompt
					when = {!Login}
					message= {(location)=>{
						return(
							location.pathname.startsWith("/user")
							? "You should login to view this"
							: true
						)}}
				/>
			</div>
			<button onClick={()=>setLogin(!Login)}>
				{Login ? <span>Logout</span> : <span>Login</span>} 
			</button>
		</BrowserRouter>
	);
};

export default App;
