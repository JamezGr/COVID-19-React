import React, { Component } from 'react'
import Chart from "chart.js";

export default class LineGraph extends Component {

    constructor(props) {
        super(props);

        this.state = {
            xLabels: [],
            yLabels: []
        }
    }

    chartRef = React.createRef();
    
    componentDidUpdate() {
    }

    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");

        const xLabels = this.props.data.map(record => {return record.date});
        const yLabels = this.props.data.map(record => {return record.count});
        
        const chart = new Chart(myChartRef, {
            type: "line",
            data: {
                labels: xLabels,
                //Bring in data
                datasets: [
                    {
                        label: "",
                        data: yLabels,
                    }
                ]
            },
            options: {
                elements: {
                    point:{
                        radius: 0
                    }
                },
                legend: {
                    display: false,
                },
                tooltips: {
                    enabled: false
                },
                scales:{
                    xAxes: [{
                        display: false //this will remove all the x-axis grid lines
                    }],
                    yAxes: [{
                        display: false //this will remove all the x-axis grid lines
                    }]
                }
            }
        });
        
        Chart.defaults.global.responsive = true;
        Chart.defaults.global.maintainAspectRatio = false;
    }
    render() {
        const {data} = this.props;

        return (
            <div style={{width: "100%", height: "80px"}}>
                <canvas style={{width: "100%", height: "80px"}} className="info-card__graph" ref={this.chartRef}/>
            </div>
        )
    }
}