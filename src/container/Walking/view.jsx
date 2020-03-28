import React from 'react';
import PropTypes from "prop-types";
import { BoxRaceContainer } from "styled";
import EventItem from 'components/EventItem';
import EventHeading from "components/EvenHeading/index";
import { Skeleton } from 'antd';
import _ from 'lodash';

class Walking extends React.Component {
    static propTypes = {
        walkingRace: PropTypes.object.isRequired
    };

    static defaultProps = {
        walkingRace: {}
    };

    state = {
        toggle: false
    };

    render() {
        const {walkingRace} = this.props;
        const {toggle} = this.state;
        const {isFetching} = this.props.walkingRace;
        const data = _.get(walkingRace, 'data.data', []);

        return (
            <BoxRaceContainer>
                { isFetching ? <Skeleton active/> :
                    <>
                        <EventHeading toggle={ this.handleToggle.bind(this) } numbers={ data.length }>walking events</EventHeading>
                        { !_.isEmpty(data) && data.map((item, key) => <EventItem toggle={ toggle } data={ item } key={ key } card={ false }/>) }
                    </>
                }
            </BoxRaceContainer>
        );
    }

    componentDidMount() {
        this.props.getWalkingRace();
    }

    handleToggle(e) {
        this.setState({
            toggle: e
        })
    }
}

export default Walking;
