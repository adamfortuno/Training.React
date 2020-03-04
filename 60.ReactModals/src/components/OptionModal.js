import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal isOpen={!!props.selectedOption} contentLabel="something" onRequestClose={props.optionSelectReset}>
        <h3>Selected option is....</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.optionSelectReset}>Okay</button>
    </Modal>
);

export default OptionModal;