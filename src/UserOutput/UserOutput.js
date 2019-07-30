import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Username: {props.username}</p>
            <p>Paragraph2</p>
        </div>
    );
};

export default UserOutput;
