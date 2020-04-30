const ring6Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_LOCATION_ring6':
            return {
                ...state,
                id: 'ring6',
                locations: action.payload.locations,
                color: 'white',
                inPlay: true,
            };
        default:
            return state;
    }
};

export default ring6Reducer;
