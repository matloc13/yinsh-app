const boardVerReducer = (state, action) => {
    switch (action.type) {
        case 'COVER_VERT':
            return [...action.payload];
        default:
            return state;
    }
};

export default boardVerReducer;
