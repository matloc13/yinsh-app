const ring2Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_LOCATION_ring2':
            return {
                ...state,
                id: 'ring2',
                locations: action.payload.locations,
                color: 'black',
                inPlay: action.payload.inPlay,
            };
        default:
            return state;
    }
};

export default ring2Reducer;
