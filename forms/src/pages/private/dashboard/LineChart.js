import React from 'react'
import Chart from "react-apexcharts"

function LineChart() {
    const series = [{
        name: "Desktops",
        data: [10, 32, 35, 51, 49, 62, 69, 91, 148]
    },{
        name: "Laptops",
        data: [1, 47, 55, 25, 43, 51, 55, 102, 127]
    }]
    const options = {
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        // title: {
        //     text: 'Product Trends by Month',
        //     align: 'left'
        // },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
    }

    return (
        <div className="line-chart-wrap mt-5">
            <Chart options={options} series={series} type="line" height={350} />
        </div>
    )
}

export default LineChart
