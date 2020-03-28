import React from 'react';
import PropTypes from 'prop-types';
import { BoxRaceContainer } from "styled";
import EventItem from 'components/EventItem';
import EventHeading from "components/EvenHeading/index";
import { Skeleton } from 'antd';
import _ from 'lodash';

class Running extends React.Component {
    state = {
        toggle: false
    };

    static propTypes = {
        runningRace: PropTypes.object.isRequired
    };

    static defaultProps = {
        runningRace: {}
    };

    render() {
        const {runningRace} = this.props;
        const {isFetching} = this.props.runningRace;
        const {toggle} = this.state;
        const data = _.get(runningRace, 'data.data', []);

        return (
            <BoxRaceContainer>
                {
                    isFetching ? <Skeleton active/> :
                        <>
                            <EventHeading toggle={ this.handleToggle.bind(this) } numbers={ data.length }>running events</EventHeading>
                            { !_.isEmpty(data) && data.map((item, key) => <EventItem toggle={ toggle } data={ item } key={ key } card={ false }/>) }
                        </>
                }
            </BoxRaceContainer>
        );
    }

    componentDidMount() {
        this.props.getRunningRace();
    }

    handleToggle(e) {
        this.setState({
            toggle: e
        })
    }
}

export default Running;
