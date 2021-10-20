const setUploadFile = (mode) => {
	return {
		type: 'SET_FILE',
		payload: mode,
	};
};

const getFile = () => {
	return {
		type: 'GET_FILE',
	};
};

const exportDefault = {
	setUploadFile,
	getFile,
};

export default exportDefault;
