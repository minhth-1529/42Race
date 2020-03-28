import { GET_WALKING_RACE } from './types';

import apiCaller from 'utils/apiCaller';

export const getWalkingRace = () => {
    return dispatch => {
        return apiCaller(`https://api-v2-sg-staging.42race.com/api/v1/race-filters?skipCount =0&limit=10&sportType=walking`, 'GET', null)
        .then(res => {
            dispatch({
                type: GET_WALKING_RACE,
                payload: res.data
            });
        })
        .catch(err => console.log(err.response));
    };
};
