const boardVerReducer = (state, action) => {
    switch (action.type) {
        case 'COVER_VERT':
            return;
        default:
            return state;
    }
};

export default boardVerReducer;
