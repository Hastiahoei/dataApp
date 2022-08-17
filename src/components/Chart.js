import React from "react";
import Bar from "./Bar";

// data sollten in Form eines Objektes übergeben werden!
const Chart = ({ data, unit, title, scale }) => {

    return <div className="chart-container">
        <h3 className="chart-title">{title}</h3>
        <h4 className="chart-unit">Einheit: {unit}</h4>

        <div className="chart">
            {Object.entries(data).map((pair) => <Bar key={pair} label={pair[0]} value={pair[1]} scale={scale} />)}
        </div>
    </div>
}

export default Chart