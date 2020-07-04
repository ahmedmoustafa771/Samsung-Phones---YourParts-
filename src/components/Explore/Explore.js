import React, { useEffect } from 'react';
import './Explore.scss';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import phoneImg from '../../assets/my-galaxy-a70-a705-sm-a705fzbgxme-frontblue-190346866.jpg';

import * as actions from '../../store/actions/index';


const explore = props => {
/*     useEffect(()=> {
        window.addEventListener('scroll', function (event) {
                const isInViewport =  (elem) => {
                    const bounding = elem.getBoundingClientRect();
                    return (
                        bounding.top >= 0 &&
                        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
                    );
                };
                const sectionHeader = document.querySelector('#explore__btn');
                if (isInViewport(sectionHeader)) {
                    console.log(sectionHeader);
                    props.onFetchingNewDevices();
                } 
        }, false);
    },[]); */

    const cards = props.phoneArray.map(el => {
        return (
            <Col xs={12} sm={6} md={4} lg={3} style={{display:"flex", alignItems:"center", justifyContent:"center"}} key={el.DeviceName}>
                <div className="explore__card">
                    <img src={phoneImg} alt="phone" />
                    <h3>{el.DeviceName}</h3>
                    <p>Announced: {el.announced}</p>
                    <button onClick={() => props.onClickingDevice(el.DeviceName)} className="explore__card--btn">View More</button>
                </div>
            </Col>
        );
    });
    return (
        <div className="explore">
            <Row noGutters>
                {cards}
                {props.numberOfProducts < 100? <button 
                    id="explore__btn" 
                    className="explore__btn" 
                    onClick={()=> props.onFetchingNewDevices()}>
                    Show More</button> : null}
            </Row>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        phoneArray: state.phones.phoneArray,
        numberOfProducts: state.phones.numberOfProducts
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onClickingDevice: (selectedPhone) => dispatch(actions.onOpenModal(selectedPhone)),
        onFetchingNewDevices: () => dispatch(actions.fetchPhonesIncrease())
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(explore);