import {useState, useEffect} from 'react';

const useCurrentPosition = () => {
	const [position, setPosition] = useState(undefined);
	const [success, setSuccess] = useState(undefined);
	const [error, setError] = useState(undefined);

	useEffect(() => {
		const successCallback = pos => {
			setPosition(pos);
			setSuccess(true);
		};

		const errorCallback = err => {
			setError(err);
			setSuccess(false);
		};

		const options = {
			enableHighAccuracy: true,
			maximumAge: 0,
		};

		navigator.geolocation.getCurrentPosition(
			successCallback,
			errorCallback,
			options,
		);
	}, []);

	return {position, success, error};
};

export default useCurrentPosition;