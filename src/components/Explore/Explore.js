import React from 'react';
import './Explore.scss';
import { Row, Col } from 'react-bootstrap';

import phoneImg from '../../assets/my-galaxy-a70-a705-sm-a705fzbgxme-frontblue-190346866.jpg';

const explore = props => {
    let phoneArray = [
        {
            name: "Phone 1",
            description: "Nice phone w keda",
            img: phoneImg
        },
        {
            name: "Phone 1",
            description: "Nice phone w keda",
            img: phoneImg
        },
        {
            name: "Phone 1",
            description: "Nice phone w keda",
            img: phoneImg
        },
        {
            name: "Phone 1",
            description: "Nice phone w keda",
            img: phoneImg
        },
        {
            name: "Phone 1",
            description: "Nice phone w keda",
            img: phoneImg
        },
        {
            name: "Phone 1",
            description: "Nice phone w keda",
            img: phoneImg
        },
        {
            name: "Phone 1",
            description: "Nice phone w keda",
            img: phoneImg
        },
        {
            name: "Phone 1",
            description: "Nice phone w keda",
            img: phoneImg
        },
        {
            name: "Phone 1",
            description: "Nice phone w keda",
            img: phoneImg
        },
        {
            name: "Phone 1",
            description: "Nice phone w keda",
            img: phoneImg
        },
        {
            name: "Phone 1",
            description: "Nice phone w keda",
            img: phoneImg
        },
        {
            name: "Phone 1",
            description: "Nice phone w keda",
            img: phoneImg
        },
        {
            name: "Phone 1",
            description: "Nice phone w keda",
            img: phoneImg
        },
        {
            name: "Phone 1",
            description: "Nice phone w keda",
            img: phoneImg
        },
        {
            name: "Phone 1",
            description: "Nice phone w keda",
            img: phoneImg
        },
        {
            name: "Phone 1",
            description: "Nice phone w keda",
            img: phoneImg
        },
        {
            name: "Phone 1",
            description: "Nice phone w keda",
            img: phoneImg
        },
        {
            name: "Phone 1",
            description: "Nice phone w keda",
            img: phoneImg
        },
        {
            name: "Phone 1",
            description: "Nice phone w keda",
            img: phoneImg
        },
        {
            name: "Phone 1",
            description: "Nice phone w keda",
            img: phoneImg
        }
    ];

    const cards = phoneArray.map(el => {
        return (
            <Col xs={12} md={4} lg={3} style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                <div className="explore__card">
                    <img src={el.img} alt="phone" />
                    <h3>{el.name}</h3>
                    <p>{el.description}</p>
                    <button>View More</button>
                </div>
            </Col>
        );
    });

    return (
        <div className="explore">
            <Row noGutters>
                {cards}
            </Row>
        </div>
    );
};

export default explore;