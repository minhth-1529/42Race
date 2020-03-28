import Walking from './view';
import { connect } from 'react-redux';
import { getWalkingRace } from 'store/Models/Walking/actions';


const mapStateToProps = state => {
    return {
        walkingRace: state.getWalkingRace
    };
};

export default connect(mapStateToProps,{getWalkingRace})(Walking)