import React from 'react';

const Bar = ({label, value, scale}) => {

    const valueStyle = {height: scale*value+'px'}

    return <div className="bar">
        <div className="value" style={valueStyle}>{value}</div>
        <div className="label">{label}</div>
    </div>
}

export default Bar