import React, { useEffect, useState } from "react";

const DEFAULT_STATE = {
	days: 0,
	hours: 0,
	minutes: 0,
	seconds: 0,
};

const Counter = ({ eventDate }) => {
	const [state, setState] = useState(DEFAULT_STATE);

	useEffect(() => {
		getTimeDifference(eventDate);
		const timer = setInterval(() => getTimeDifference(eventDate), 1000);

		return () => {
			clearInterval(timer);
		};
	}, []);

	const leadingZero = (num) => {
		return num < 10 && num > 0 ? "0" + num : num;
	};

	const getTimeDifference = (eventDate) => {
		const time = Date.parse(eventDate) - Date.parse(new Date());
		const days = Math.floor(time / (1000 * 60 * 60 * 24));
		const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
		const minutes = Math.floor((time / 1000 / 60) % 60);
		const seconds = Math.floor((time / 1000) % 60);
		setState({ days, hours, minutes, seconds });
	};

	return (
		<div class="container counter">
			<div className="counter__title">Time until presale</div>
			<div class="counter__clock-wrapper">
				<div className="counter__clock">
					<span>{leadingZero(state.days)}</span>{" "}
					{state.days == 1 ? "day" : "days"}
				</div>
				<div className="counter__clock">
					<span>{leadingZero(state.hours)}</span>{" "}
					{state.hours == 1 ? "hour" : "hours"}
				</div>
				<div className="counter__clock">
					<span>{leadingZero(state.minutes)}</span>{" "}
					{state.minutes == 1 ? "minute" : "minutes"}
				</div>
				<div className="counter__clock">
					<span>{leadingZero(state.seconds)}</span>{" "}
					{state.seconds == 1 ? "second" : "seconds"}
				</div>
			</div>
		</div>
	);
};

export default Counter;
