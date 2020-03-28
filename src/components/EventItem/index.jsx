import React from 'react';
import PropTypes from 'prop-types';
import _ from "lodash";
import { Item } from "./styled";

const EventItem = (props) => {
    const {data, card, toggle} = props;
    return (
        <Item src={ !toggle ? data.banner_card : data.medalViewImage } className={ `${ card ? 'grid' : 'list' } ${ toggle ? 'medal-view' : '' }` }>
            <div className="race-thumb">
                { _.get(data, 'isFreeEngraving', false) &&
                <span className="event-red-tag">Free Medal engraving</span>
                }
            </div>
            <div className="race-content">
                <p className="race-title">{ data.race_name }</p>
                <p className="race-date">{ data.racePeriod }</p>
                <div className="race-tags">
                    <ul>
                        <li>
                            <div>{ data.sportType }</div>
                        </li>
                        <li>
                            <div>{ data.raceRunners } joined</div>
                        </li>
                        <li>
                            <div>{ _.get(data, 'racePrice', 'Free') }</div>
                        </li>
                        { !_.isEmpty(_.get(data, 'categories', [])) && data.categories.map((item, key) => {
                            return (
                                <li key={ key }>
                                    <div>{ item }</div>
                                </li>
                            )
                        }) }
                        <li>
                            <div>{ data.eventType } submission</div>
                        </li>
                    </ul>
                </div>
            </div>
        </Item>
    );
};

EventItem.propTypes = {
    data: PropTypes.object.isRequired,
    card: PropTypes.bool.isRequired,
    toggle: PropTypes.bool.isRequired,
};

EventItem.defaultProps = {
    data: [],
    card: true,
    toggle: false,
};

export default EventItem;
