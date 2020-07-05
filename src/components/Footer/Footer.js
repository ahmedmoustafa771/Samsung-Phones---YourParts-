import React from 'react';
import './Footer.scss';
import {Row,Col} from 'react-bootstrap';

import logo from '../../assets/logo.png';


const footer = props => {
    return (
        <div className="footer">
            <Row noGutters style={{alignItems:"center", justifyContent:"space-around"}}>
                <Col xs={9} md={6}>
                    <img src={logo} alt="logo" />
                    <p>Project made by Ahmed Mostafa for YourParts family</p>
                </Col>
            </Row>
        </div>
    );
};

export default footer;