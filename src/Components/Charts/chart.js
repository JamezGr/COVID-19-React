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

    setVisibleLine() {

    }

    subscribe() {
        
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
                        label: this.props.lineName || "",
                        hidden: false,
                        data: yLabels,
                        borderColor: this.props.borderColor || 'rgba(0, 0, 0, 0.1)',
                        backgroundColor: this.props.backgroundColor || 'rgba(0, 0, 0, 0.1)'
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
                    enabled: this.props.tooltips || false
                },
                scales:{
                    xAxes: [{
                        display: this.props.xAxes || false, //this will remove all the x-axis grid lines
                        gridLines: {
                            display: false
                         }
                    }],
                    yAxes: [{
                        display: this.props.yAxes || false, //this will remove all the x-axis grid lines
                        gridLines: {
                            display: true
                         }
                    }]
                }
            }
        });
        
        Chart.defaults.global.responsive = true;
        Chart.defaults.global.maintainAspectRatio = false;

        console.log(this.chart);
    }

    componentDidMount() {
        this.createGraph();
    }

    render() {
        const {data, className, lineName, labels, legend, tooltips, xAxes, yAxes, backgroundColor, borderColor} = this.props;

        return (
            <div style={{width: "100%"}}>
                <canvas style={{width: "100%"}} className={this.props.className} ref={this.chartRef}/>
            </div>
        )
    }
}