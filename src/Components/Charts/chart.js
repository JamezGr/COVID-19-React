import React, { Component } from 'react'
import Chart from "chart.js";

export default class LineGraph extends Component {

    constructor(props) {
        super(props);

        this.state = {
            xLabels: [],
            yLabels: [],
            chartInstance: null
        }
    }

    chartRef = React.createRef();
    chart;
    
    componentDidUpdate() {
        if (this.chart) {
            this.resetGraph();
            this.createGraph();
        }
    }

    resetGraph() {
        if (this.chart) this.chart.destroy();
    }

    createGraph() {
        const myChartRef = this.chartRef.current.getContext("2d");

        const xLabels = this.props.data.map(record => {return record.date});
        const yLabels = this.props.data.map(record => {return record.count});

        this.chart = new Chart(myChartRef, {
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

    componentDidMount() {
        this.createGraph();
    }

    render() {
        const {data, className} = this.props;

        return (
            <div style={{width: "100%"}}>
                <canvas style={{width: "100%"}} className={this.props.className} ref={this.chartRef}/>
            </div>
        )
    }
}