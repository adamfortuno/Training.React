import React from 'react';

const Option = (props) => {
    return (
        <div>
        <p>{props.option}</p>
        <button onClick={(e) => ( props.optionRemove(props.option) )}>Remove</button>
        </div>
    );
};

export default Option;