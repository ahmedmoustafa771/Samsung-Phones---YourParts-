import React, { useState } from 'react';
import './Compare.scss';
import { Row, Col } from 'react-bootstrap';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import FeatureCard from '../UI/FeatureCard/FeatureCard'
import { connect } from 'react-redux';
import phoneImg from '../../assets/my-galaxy-a70-a705-sm-a705fzbgxme-frontblue-190346866.jpg';

import * as actions from '../../store/actions/index';

const compare = props => {
    const [selectedPhone1, setSelectedPhone1] = useState(null);
    const features1 = props.AllPhonesArray.map(el => {
        if (el.DeviceName === selectedPhone1) {
            return (
                <React.Fragment>
                    <FeatureCard feature="Dimensions" details={el.dimensions}/>
                    <FeatureCard feature="Resolution" details={el.resolution}/>
                    <FeatureCard feature="SIM" details={el.sim}/>
                    <FeatureCard feature="Weight" details={el.weight}/>
                    <FeatureCard feature="Wlan" details={el.wlan}/>
                </React.Fragment>
            );
        } else {
            return null;
        }
    });

    const [selectedPhone2, setSelectedPhone2] = useState(null);
    const features2 = props.AllPhonesArray.map(el => {
        if (el.DeviceName === selectedPhone2) {
            return (
                <React.Fragment>
                    <FeatureCard feature="Dimensions" details={el.dimensions}/>
                    <FeatureCard feature="Resolution" details={el.resolution}/>
                    <FeatureCard feature="SIM" details={el.sim}/>
                    <FeatureCard feature="Weight" details={el.weight}/>
                    <FeatureCard feature="Wlan" details={el.wlan}/>
                </React.Fragment>
            );
        } else {
            return null;
        }
    });
    return (
        <div className="compare">
            <Row noGutters>
                <Col xs={6}>
                    <div className="compare__column">
                        <Autocomplete
                            options={props.AllPhonesArray}
                            getOptionLabel={(option) => option.DeviceName}
                            className="compare__search"
                            renderInput={(params) => <TextField {...params} label="Select Phone" variant="outlined" />}
                            onChange={(event, newValue) => {
                                setSelectedPhone1(newValue.DeviceName);
                              }}
                        />
                        <img src={phoneImg} alt="phone" onClick={() => props.onClickingDevice(selectedPhone1)}/>
                        <h2 onClick={() => props.onClickingDevice(selectedPhone1)}>{selectedPhone1}</h2>
                        {features1}
                    </div>
                </Col>
                <Col xs={6}>
                    <div className="compare__column">
                        <Autocomplete
                            options={props.AllPhonesArray}
                            getOptionLabel={(option) => option.DeviceName}
                            className="compare__search"
                            renderInput={(params) => <TextField {...params} label="Select Phone" variant="outlined" />}
                            onChange={(event, newValue) => {
                                setSelectedPhone2(newValue.DeviceName);
                              }}
                        />
                        <img src={phoneImg} alt="phone" onClick={() => props.onClickingDevice(selectedPhone2)}/>
                        <h2 onClick={() => props.onClickingDevice(selectedPhone2)}>{selectedPhone2}</h2>
                        {features2}
                    </div>
                </Col>
            </Row>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        AllPhonesArray: state.phones.AllPhonesArray,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onClickingDevice: (selectedPhone) => dispatch(actions.onOpenModal(selectedPhone)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(compare);