import { useEffect, useState } from 'react';
//fecha
import DateObject from 'react-date-object';

const Timer = () => {
	const [hora, setHora] = useState(12);
	const [minute, setMinute] = useState(5);
	const [second, setSecond] = useState(10);
	const [date, setDate] = useState('');
	const upHours = () => {
		return hora - 1;
	};
	setInterval(() => {
		let dateSystem = new DateObject();
		setDate(dateSystem.format('HH:mm:ss'));

		// setMinute(minute - 1);
		// setSecond(second - 1);
		setHora(upHours);
	}, 1000);
	return (
		<div>
			{hora + ':' + minute + ':' + second}
			<br /> hours {date}
		</div>
	);
};

export default Timer;
