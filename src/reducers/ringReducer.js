const ringReducer = (state, action) => {
    switch (action.type) {
        case 'IS_CURRENT':
            return { ...state, current: action.payload.current };
        case 'MOVE_RING':
            return;
        default:
            return state;
    }
    return;
};
