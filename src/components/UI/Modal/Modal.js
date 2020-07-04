import React from 'react';

import  './Modal.scss';
import Backdrop from '../Backdrop/Backdrop';

const modal = props => {
        return (
            <React.Fragment>
                <Backdrop show={props.show} clicked={props.modalClosed} />
                    <div 
                        className="modal"
                        style={{
                        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: props.show ? '1' : '0',
                        zIndex:  props.show ? '1000': '1'
                        }}>
                        {props.children}
                    </div>
            </React.Fragment>
        );
}

export default modal;