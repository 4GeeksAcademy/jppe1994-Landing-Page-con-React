import React from "react";

//include images into your bundle

import Navbar  from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import PieDePagina from "./PieDePagina.jsx";



//create your first component
const Home = () =>{
	return (
		<>

			<Navbar/>
			<Jumbotron/>
			<div className="container">
			<div className="row ">
				<div className="col">
				<Card />
				</div>
				<div className="col">
				<Card />
				</div>
				<div className="col">
				<Card />
				</div>
				<div className="col">
				<Card />
				</div>
			
			
			</div>

			</div>
			<PieDePagina/>
			
			

		</>



	);
}

export default Home;
