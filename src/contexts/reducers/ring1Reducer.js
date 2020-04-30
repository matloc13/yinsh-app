const ring1Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_LOCATION_ring1':
            return {
                ...state,
                id: 'ring1',
                locations: action.payload.locations,
                color: 'black',
                inPlay: true,
            };
        default:
            return state;
    }
};

export default ring1Reducer;
