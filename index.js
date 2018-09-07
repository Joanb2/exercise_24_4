const formatDate = (timeInSeconds) => {
	const hours = Math.floor(timeInSeconds / 3600);
	const minutes = Math.floor(timeInSeconds % 3600 / 60);
	const seconds = Math.floor(timeInSeconds % 3600 % 60);

	let time;

	(hours < 1 && minutes < 1) ? time = `${seconds}s` : false;
	(timeInSeconds == undefined) ? time = `0s` : false;
	(hours < 1 && (minutes > 0) && (seconds > 0)) ? time = `${minutes}m ${seconds}s` : false;
	(hours < 1 && (minutes > 1) && (seconds > 0)) ? time = `${minutes}m ${seconds}s` : false;
	(hours < 1 && seconds % 60 === 0) ? time = `${minutes}m` : false;
	(hours > 0 && (minutes % 60 !== 0) && (seconds % 60 !== 0)) ? time = `${hours}h ${minutes}m ${seconds}s` : false;
	(hours > 1 && (minutes % 60 !== 0) && (seconds % 60 !== 0)) ? time = `${hours}h ${minutes}m ${seconds}s` : false;
	(hours > 0 && (minutes === 0) && (seconds === 0)) ? time = `${hours}h` : false;
	(hours > 0 && (minutes > 0) && (seconds === 0)) ? time = `${hours}h ${minutes}m` : false;
	(hours > 0 && (minutes === 0) && (seconds > 0)) ? time = `${hours}h ${seconds}s` : false;

	return `${time}`;
}

module.exports = formatDate;