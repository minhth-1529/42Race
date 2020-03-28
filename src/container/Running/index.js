import Running from './view';
import { connect } from 'react-redux';
import { getRunningRace } from 'store/Models/Running/actions';


const mapStateToProps = state => {
    return {
        runningRace: state.getRunningRace
    };
};

export default connect(mapStateToProps,{getRunningRace})(Running)