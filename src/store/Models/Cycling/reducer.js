import { GET_CYCLING_RACE } from './types';

const initialState = {
    isFetching: true,
    data: {}
};

export const getCyclingRace = (state = initialState, action) => {
    switch (action.type) {
        case GET_CYCLING_RACE:
            return {
                isFetching: false,
                data: {...action.payload}
            };
        default:
            return {
                ...state
            };
    }
};