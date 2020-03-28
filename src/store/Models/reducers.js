import { combineReducers } from 'redux';
import { getFeatureRace } from './FeatureRace/reducer';
import { getRunningRace } from './Running/reducer';
import { getCyclingRace } from './Cycling/reducer';
import { getWalkingRace } from './Walking/reducer';

const rootReducers = combineReducers({
    getFeatureRace,
    getRunningRace,
    getCyclingRace,
    getWalkingRace
});

export default rootReducers;