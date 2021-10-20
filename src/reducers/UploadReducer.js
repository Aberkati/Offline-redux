const UploadReducer = (state = {}, action) => {
	switch (action.type) {
		case 'SET_FILE':
			return {
				...state,
				data: action.payload,
			};
		case 'GET_FILE':
			return {
				...state,
				data: action.payload,
			};
		default:
			return state;
	}
};

export default UploadReducer;
