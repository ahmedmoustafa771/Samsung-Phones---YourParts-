import React from 'react';
import './ItemDetails.scss';
import { connect } from 'react-redux';

import CancelIcon from '@material-ui/icons/Cancel';
import Modal from '../UI/Modal/Modal';
import FeatureCard from '../UI/FeatureCard/FeatureCard';
import phoneImg from '../../assets/my-galaxy-a70-a705-sm-a705fzbgxme-frontblue-190346866.jpg';
import * as actions from '../../store/actions/index';

const ItemDetails = props => {
    const features = props.phoneArray.map(el => {
        if (el.DeviceName === props.selectedPhone) {
            return (
                <React.Fragment key={el.DeviceName}>
                    <FeatureCard feature="Dimensions" details={el.dimensions}/>
                    <FeatureCard feature="Resolution" details={el.resolution}/>
                    <FeatureCard feature="SIM" details={el.sim}/>
                    <FeatureCard feature="Weight" details={el.weight}/>
                    <FeatureCard feature="Wlan" details={el.wlan}/>
                    <FeatureCard feature="Bluetooth" details={el.bluetooth}/>
                    <FeatureCard feature="Card Slot" details={el.card_slot}/>
                    <FeatureCard feature="Battery" details={el.battery_c}/>
                    <FeatureCard feature="Colors" details={el.colors}/>
                    <FeatureCard feature="GPS" details={el.gps}/>
                </React.Fragment>
            );
        } else {
            return null;
        }
    });
    return (
        <Modal show={props.show} modalClosed={() => props.onClickBackdrop()}>
            <div className="ItemDetails">
                <CancelIcon className="ItemDetails__icon" onClick={() => props.onClickBackdrop()}/>
                <img src={phoneImg} alt="phone"/>
                <h2 >{props.selectedPhone}</h2>
                {features}
            </div>
        </Modal>
    );
};

const mapStateToProps = state => {
    return {
        phoneArray: state.phones.phoneArray,
        show: state.itemDetails.showModal,
        selectedPhone: state.itemDetails.selectedPhone
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onClickBackdrop: () => dispatch(actions.onCancelModal())
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(ItemDetails);