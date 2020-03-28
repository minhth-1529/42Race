import {connect} from 'react-redux';
import {getFeatureRace} from '../../store/Models/FeatureRace/actions.js'
import Event from './view';

const mapStateToProps = state =>{
    return {
        featureRace: state.getFeatureRace
    }
};

export default connect(mapStateToProps,{getFeatureRace})(Event)