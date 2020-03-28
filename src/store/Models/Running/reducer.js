import { GET_RUNNING_RACE } from './types';

const initialState = {
    isFetching: true,
    data: {}
};

export const getRunningRace = (state = initialState, action) => {
    switch (action.type) {
        case GET_RUNNING_RACE:
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