const ring3Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_LOCATION_ring3':
            return {
                ...state,
                id: 'ring3',
                locations: action.payload.locations,
                color: 'black',
                inPlay: true,
            };
        default:
            return state;
    }
};

export default ring3Reducer;
