import React from 'react';
import './FeatureCard.scss';

const featureCard = props => {
    return (
        <div className="featureCard">
            <h2>{props.feature}</h2>
            <p>{props.details}</p>
        </div>
    );
};

export default featureCard;