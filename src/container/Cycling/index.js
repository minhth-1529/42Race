import Cycling from './view';
import { connect } from 'react-redux';
import { getCyclingRace } from 'store/Models/Cycling/actions';


const mapStateToProps = state => {
    return {
        cyclingRace: state.getCyclingRace
    };
};

export default connect(mapStateToProps,{getCyclingRace})(Cycling)