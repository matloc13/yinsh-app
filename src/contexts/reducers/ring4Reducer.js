const ring4Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_LOCATION_ring4':
            return {
                ...state,
                id: 'ring4',
                locations: action.payload.locations,
                color: 'white',
                inPlay: true,
            };
        default:
            return state;
    }
};

export default ring4Reducer;
