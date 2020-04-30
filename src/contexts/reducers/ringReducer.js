const ringReducer = (state, action) => {
    switch (action.type) {
        case 'IS_RING':
            return {
                ...state,
                current: action.payload.current,
                color: action.payload.color,
            };

        default:
            return state;
    }
};

export default ringReducer;
