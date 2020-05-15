const spaceRowReducer = (state, action) => {
    switch (action.type) {
        case 'SPACE_ROW':
            return [...action.payload];
        default:
            return state;
    }
};

export default spaceRowReducer;
