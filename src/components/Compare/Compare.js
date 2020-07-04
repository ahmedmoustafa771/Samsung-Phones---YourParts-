import React from 'react';
import './Compare.scss';
import { Row, Col } from 'react-bootstrap';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import FeatureCard from '../UI/FeatureCard/FeatureCard'

import phoneImg from '../../assets/my-galaxy-a70-a705-sm-a705fzbgxme-frontblue-190346866.jpg';

const compare = props => {
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

    let featuresArray= [
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
    ];

    const features = featuresArray.map(el => {
        return (
            <FeatureCard feature={el.name} details={el.description}/>
        );
    });
    return (
        <div className="compare">
            <Row noGutters>
                <Col xs={6}>
                    <div className="compare__column">
                        <Autocomplete
                            id="combo-box-demo"
                            options={phoneArray}
                            getOptionLabel={(option) => option.name}
                            className="compare__search"
                            renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
                        />
                        <img src={phoneImg} alt="phone" />
                        <h2>Phone 1</h2>
                        {features}
                    </div>
                </Col>
                <Col xs={6}>
                    <div className="compare__column">
                        <Autocomplete
                            id="combo-box-demo"
                            options={phoneArray}
                            getOptionLabel={(option) => option.name}
                            className="compare__search"
                            renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
                        />
                        <img src={phoneImg} alt="phone" />
                        <h2>Phone 1</h2>
                        {features}
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default compare;