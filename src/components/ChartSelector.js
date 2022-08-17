import React, { useState } from 'react'
import { ReactDOM } from 'react'
import Chart from './Chart'

const ChartSelector = ({ data, title, unit, scale }) => {

    const [year, setYear] = useState(2020)

    // Attention: Keys are strings!
    const yearsWithData = Object.keys(data)

    const decrementYear = () => {
        if (yearsWithData.includes(String(year - 1))) {
            setYear(year - 1)
        } else {
            alert(`No data available for year ${year - 1}`)
        }
    }

    const incrementYear = () => {
        if (yearsWithData.includes(String(year + 1))) {
            setYear(year + 1)
        } else {
            alert(`No data available for year ${year + 1}`)
        }
    }

    // Logic to get component height right

    const getTotalMaximum = () => {
        const yearlyMaxima = [];
        Object.values(data).forEach(yearData => {
            const yearlyMaximum = Math.max(...Object.values(yearData))
            yearlyMaxima.push(yearlyMaximum)
        })
        return Math.max(...yearlyMaxima)
    }

    // The 350 are a hack to include the height of the titles and labels and margins and stuff
    const extraHeight = 350
    const initialHeight = (scale * getTotalMaximum() + extraHeight)

    const [height, setHeight] = useState(initialHeight)

    // Not robustly implemented!
    const extractNumber = cssString => {
        return cssString.substring(0, cssString.length -2)
    }

    // References to real HTML elements
    const chartSelectorRef = React.useRef();
    const chartRef = React.useRef()

    // Do the following after the first rendering of the component:
    React.useEffect(() => {
        // console.log(chartSelectorRef);
        // console.log(chartSelectorRef.current);
        // console.log(chartSelectorRef.current.style);
        // console.log(chartSelectorRef.current.style.height);

        // Need to access this after the Chart component has rendered!
        // console.log(chartRef);
        // console.log(chartRef.current);
        // console.log("getComputedStyle(chartRef.current).getPropertyValue('height')")
        // console.log(getComputedStyle(chartRef.current).getPropertyValue('height'))
        // console.log("extractNumber(getComputedStyle(chartRef.current).getPropertyValue('height'))")
        // console.log(extractNumber(getComputedStyle(chartRef.current).getPropertyValue('height')))

        const chartHeight = extractNumber(getComputedStyle(chartRef.current).getPropertyValue('height'))

        // console.log("chartHeight");
        // console.log(chartHeight);

        // Doesn't work
        // chartSelectorRef.current.style.height = (chartHeight + 200) + 'px'

        // Doesn't seem to work either
        // setHeight(chartHeight + 100)
        // console.log("height after rerendering: " + height);
    })

    const chartSelectorStyle = { height: height + 'px' }

    return (
        <div ref={chartSelectorRef} className="chart-selector" style={chartSelectorStyle}>
            <h2 className="chart-selector-title">{title}</h2>
            <div ref={chartRef}>
                <Chart data={data[year]} title={year} unit={unit} scale={scale} />
            </div>
            <div className="year-controls">
                <button onClick={decrementYear}>-</button>
                {year}
                <button onClick={incrementYear}>+</button>
            </div>
        </div>
    )
}

export default ChartSelector