import React from 'react';
import PropTypes from 'prop-types';
import { BoxRaceContainer } from "styled";
import EventItem from 'components/EventItem';
import _ from 'lodash';
import EventHeading from "components/EvenHeading/index";
import { Skeleton } from 'antd';

class Cycling extends React.Component {
    static propTypes = {
        cyclingRace: PropTypes.object.isRequired
    };

    static defaultProps = {
        cyclingRace: {}
    };

    state = {
        toggle: false
    };

    render() {
        const {cyclingRace} = this.props;
        const {toggle} = this.state;
        const {isFetching} = this.props.cyclingRace;
        const data = _.get(cyclingRace, 'data.data', []);

        return (
            <BoxRaceContainer>
                { isFetching ? <Skeleton active/> :
                    <>
                        <EventHeading toggle={ this.handleToggle.bind(this) } numbers={ data.length }>cycling events</EventHeading>
                        { !_.isEmpty(data) && data.map((item, key) => <EventItem toggle={ toggle } data={ item } key={ key } card={ false }/>) }
                    </>
                }
            </BoxRaceContainer>
        );
    }

    componentDidMount() {
        this.props.getCyclingRace();
    }

    handleToggle(e) {
        this.setState({
            toggle: e
        })
    }
}

export default Cycling;
