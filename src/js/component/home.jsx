import React from "react";
import propTypes from "prop-types";
import ReactDom from "react-dom";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
// import CardOne from "./CardOne";
import CardOne from "../component/CardOne.jsx"
//create your first component
const Home = ({counter}) => {
	
	return (
		<div className="text-center">
			<div className="col-2 mx-2">{counter.num1}</div>
			<div className="col-2 mx-2">{counter.num2}</div>
			<div className="col-2 mx-2">{counter.num3}</div>
			<div className="col-2 mx-2">{counter.num4}</div>
			<div className="col-2 mx-2">{counter.num5}</div>
			<div className="col-2 mx-2">{counter.num6}</div>
		</div>
	);
}

export default Home;
Home.propTypes={
	num1:propTypes.string,
	num2:propTypes.string,
	num3:propTypes.string,
	num4:propTypes.string,
	num5:propTypes.string,
	num6:propTypes.string,
}