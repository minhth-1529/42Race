import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import { RaceHead } from './styled';

const EventHeading = (props) => {
    return (
        <RaceHead>
            <h2 className="race-heading">{ props.numbers } { props.children }</h2>
            <div>
                <strong>Medal view</strong>
                <Switch
                    checkedChildren={ <CheckOutlined/> }
                    unCheckedChildren={ <CloseOutlined/> }
                    onClick={ (value) => props.toggle(value) }
                />
            </div>
        </RaceHead>
    );
};

EventHeading.propTypes = {
    numbers: PropTypes.number.isRequired,
    children: PropTypes.string.isRequired
};

EventHeading.defaultProps = {
    numbers: 0,
    children: ''
};

export default EventHeading;
