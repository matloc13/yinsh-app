const ringlastReducer = (state, action) => {
    switch (action.type) {
        case 'SET_LAST':
            return { ...state, [action.payload.name]: action.payload.vert };
        default:
            return state;
    }
};

export default ringlastReducer;
