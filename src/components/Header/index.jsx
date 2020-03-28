import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Select } from 'antd';
import { FaRegBell, FaBars } from 'react-icons/fa';
import { FiChevronRight, FiUsers, FiUserPlus } from 'react-icons/fi'
import { MdHelpOutline, MdMessage, MdLanguage } from 'react-icons/md'
import { Wrapper, Bell, Heading, Hamburger, ModalStyled, WrapperInner } from './styled';

const Header = () => {
    const {Option} = Select;
    const [visible, showModal] = useState(false);

    return (
        <Wrapper>
            <WrapperInner>
                <Bell><Link to="/"><FaRegBell/></Link></Bell>
                <Heading>
                    <h1>Event</h1>
                </Heading>
                <Hamburger>
                    <span onClick={ () => showModal(true) }><FaBars/></span>
                    <ModalStyled
                        width='360px'
                        footer={ [null, null] }
                        visible={ visible }
                        onCancel={ () => showModal(false) }
                    >
                        <div className="modal-inner">
                            <div className="item">
                                <div className="text"><FiUsers/> Login</div>
                                <div className="icon"><FiChevronRight/></div>
                            </div>
                            <div className="item">
                                <div className="text"><FiUserPlus/> Sign up</div>
                                <div className="icon"><FiChevronRight/></div>
                            </div>
                            <div className="item">
                                <div className="text"><MdHelpOutline/> Guides and FAQ</div>
                                <div className="icon"><FiChevronRight/></div>
                            </div>
                            <div className="item">
                                <div className="text"><MdMessage/> Contact us</div>
                                <div className="icon"><FiChevronRight/></div>
                            </div>
                            <div className="item lang">
                                <div className="text"><MdLanguage/> Language</div>
                                <div className="icon">
                                    <Select defaultValue="en" showArrow={ false } dropdownStyle={ {minWidth: '145px'} }>
                                        <Option value="en">English</Option>
                                        <Option value="简体中文">简体中文</Option>
                                        <Option value="繁體中文">繁體中文</Option>
                                        <Option value="繁體中文">繁體中文</Option>
                                        <Option value="bi">Bahasa Indonesia</Option>
                                        <Option value="ภาษาไทย">ภาษาไทย</Option>
                                        <Option value="tv">Tiếng Việt</Option>
                                    </Select>
                                    <FiChevronRight/>
                                </div>
                            </div>
                        </div>
                    </ModalStyled>
                </Hamburger>
            </WrapperInner>
        </Wrapper>
    );
};

export default Header;
