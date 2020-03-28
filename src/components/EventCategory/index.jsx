import React from 'react';
import { Wrapper, WrapperInner } from './styled';
import { Link } from 'react-router-dom';
import Running from 'assets/images/category-run.png';
import Cycling from 'assets/images/category-bike.png';
import Walking from 'assets/images/category-walk.png';

const EventCategory = () => {
    return (
        <Wrapper>
            <h2>Events</h2>
            <WrapperInner>
                <ul>
                    <li>
                        <Link className="d-block" to="/running">
                            <div className="inner-item running" style={ {backgroundImage: `url(${ Running })`} }>
                                <p>Running</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link className="d-block" to="/cycling">
                            <div className="inner-item cycling" style={ {backgroundImage: `url(${ Cycling })`} }>
                                <p>Cycling</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link className="d-block" to="/walking">
                            <div className="inner-item walking" style={ {backgroundImage: `url(${ Walking })`} }>
                                <p>Walking</p>
                            </div>
                        </Link>
                    </li>
                </ul>
            </WrapperInner>
        </Wrapper>
    );
};

export default EventCategory;
