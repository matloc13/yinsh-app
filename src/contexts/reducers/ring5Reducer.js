const ring5Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_LOCATION_ring5':
            return {
                ...state,
                id: 'ring5',
                locations: action.payload.locations,
                color: 'white',
                inPlay: true,
            };
        default:
            return state;
    }
};

export default ring5Reducer;
