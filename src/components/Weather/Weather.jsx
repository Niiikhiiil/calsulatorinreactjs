// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// // import Moment from "react-moment"

// const APIkey = 'a6853c4bf4dc499288685856231403';

// const Weather = () => {
// 	const [data, setData] = useState(null);
// 	const [locationn, setLocationn] = useState('Bucharest');
// 	const [input, setInput] = useState('');
// 	const [error, setError] = useState('');

// 	// function handleChange(e) {
// 	// 	setInput(e.target.value);
// 	// }

// 	useEffect(() => {
// 		let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationn}?unitGroup=metric&key=NQHGKUYU2ZVZNSLHXVCDP5N7R&contentType=json`;

// 		axios.get(url).then((res) => setData(res));
// 	}, [locationn]);
// 	console.log(data);
// 	return (
// 		<>
// 			<div>
// 				<h2>Weather App</h2>

// 				<div>
// 					<input
// 						type="text"
// 						// onChange={handleChange}
// 					/>
// 					<button>Go</button>
// 					<small> {error}</small>
// 				</div>
// 				{data.length > 0 ? (
// 					<>
// 						<div>
// 							<strong>Name: </strong>
// 							{data.location.name}
// 							<br />
// 							<strong>Country: </strong>
// 							{data.location.country}
// 							<br />
// 						</div>
// 						<div>
// 							<strong>Date & Time: </strong>
// 							{data.location.localtime}
// 						</div>
// 						<div>
// 							<strong>Region:</strong>
// 							{data.location.region}
// 						</div>
// 						<div>
// 							<strong>Condition:</strong>
// 							{data.current.condition.text}
// 							<span>{data.condition.icon}</span>
// 						</div>
// 						<div>
// 							<strong>Temperature:</strong>
// 							{data.current.temp_c} <sup>.</sup>C
// 						</div>
// 					</>
// 				) : null}
// 			</div>
// 		</>
// 	);
// };

// export default Weather;
