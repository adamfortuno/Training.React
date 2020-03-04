import React from 'react';
import Option from './Option';

const Options = (props) =>  {
    const options = props.options;

    return (
        <div>
            {options.map((opt) => <Option key={opt} option={opt} optionRemove={props.optionRemove}/>)}
        </div>
    );    
};

export default Options;