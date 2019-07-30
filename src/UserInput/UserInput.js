import React from 'react';

const UserInput = (props) => {
    const divStyle = {
        backgroundColor: 'white',
        font: 'inherit',
        padding: '8px',
        margin: '16px auto',
        textAlign: 'center'
    };

    const inputStyle = {
        ...divStyle,
        border: '1px solid blue'
    };

    return (
        <div style={divStyle}>
            <input type="text" onChange={props.changed} value={props.username} style={inputStyle}/>
        </div>
    );
};

export default UserInput;
