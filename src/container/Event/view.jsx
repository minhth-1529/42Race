import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FeatureRace from "components/FeatureRace";
import EventCategory from "components/EventCategory";
import EventSection from "components/EventSection";
import { Skeleton } from 'antd';
import { BoxEventContainer, Section } from "./styled";
import _ from 'lodash';

const SupportRender = (props) =>{
    return (
        Object.keys(props.data).filter(name => !['updatedAt', 'featured', '_id'].includes(name)).map((key) => {
            const sectionTitle = key.replace(/([A-Z]+)*([A-Z][a-z])/g, "$1 $2");
            const eventData = props.data[key];

            return (
                <section key={ key }>
                    <EventSection data={ eventData } title={ sectionTitle }/>
                </section>
            )
        })
    )
};

class Event extends Component {
    static propTypes = {
        featureRace: PropTypes.object.isRequired
    };

    static defaultProps = {
        featureRace: {}
    };

    componentDidMount() {
        this.props.getFeatureRace();
    }

    render() {
        const {featureRace} = this.props;
        const {isFetching} =this.props.featureRace;
        const data = _.get(featureRace.data, 'data', []);

        return (
            <>
                <Section>
                    {isFetching ? <Skeleton active /> : <FeatureRace data={ data.featured }/>}
                </Section>
                <BoxEventContainer>
                    <section>
                        <EventCategory/>
                    </section>
                    {isFetching ? <Skeleton active /> : <SupportRender data={data} isFetching={isFetching} />}
                </BoxEventContainer>
            </>
        );
    }
}

export default Event;