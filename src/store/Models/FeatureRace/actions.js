import {GET_FEATURE_RACE} from './types';

import apiCaller from 'utils/apiCaller';

export const getFeatureRace = () => {
    return dispatch => {
        return apiCaller(`https://api-v2-sg.42race.com/api/v1/race-events`, 'GET', null)
        .then(res => {
            dispatch({
                type: GET_FEATURE_RACE,
                payload: res.data
            });
        })
        .catch(err => console.log(err.response));
    };
};
