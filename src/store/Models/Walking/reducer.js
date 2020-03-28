import { GET_WALKING_RACE } from './types';

const initialState = {
    isFetching: true,
    data: {}
};

export const getWalkingRace = (state = initialState, action) => {
    switch (action.type) {
        case GET_WALKING_RACE:
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