import { GET_FEATURE_RACE } from './types';

const initialState = {
    isFetching: true,
    data: {}
};

export const getFeatureRace = (state = initialState, action) => {
    switch (action.type) {
        case GET_FEATURE_RACE:
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