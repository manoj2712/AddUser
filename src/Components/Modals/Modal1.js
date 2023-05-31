import React from 'react';

const Modal1 = (props) => {
    const onClickHandler = () => {
        props.setModalToFalse();
    }
    return <p onClick={onClickHandler}>
        Invalid age and name
    </p>

}

export default Modal1;
