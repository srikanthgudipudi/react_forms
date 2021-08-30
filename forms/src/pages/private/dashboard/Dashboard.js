import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { IoIosPerson, IoMdCard, IoMdTransgender } from 'react-icons/io'
import Chart from "react-apexcharts"
import LineChart from './LineChart'

const Dashboard = () => {

    const series = [72]
    const options = {
        chart: {
            type: 'radialBar',
            offsetY: -20,
            sparkline: {
                enabled: true
            }
        },
        plotOptions: {
            radialBar: {
                startAngle: -90,
                endAngle: 90,
                track: {
                    background: "#e7e7e7",
                    strokeWidth: '90%',
                    margin: 5, // margin is in pixels
                    dropShadow: {
                        enabled: true,
                        top: 2,
                        left: 0,
                        color: '#999',
                        opacity: 1,
                        blur: 2
                    }
                },
                dataLabels: {
                    name: {
                        show: false
                    },
                    value: {
                        offsetY: -2,
                        fontSize: '22px'
                    }
                }
            }
        },
        grid: {
            padding: {
                top: -10
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                shadeIntensity: 0.4,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 53, 91]
            },
        },
        labels: ['Average Results'],
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={12}>
                        <div className="mt-2">
                            <h4 className="h4 fw-medium mb-3">Perform cluster analysis on member's health assessment data</h4>
                        </div>
                    </Col>
                    {/* Left column */}
                    <Col sm={3}>
                        <div className="dsh-left-column mt-3">
                            <div className="dsh-left-column-top d-flex pos-rl">
                                <h4 className="h4 dsh-left-column-heading fw-bold">Health Score Summery</h4>
                                <div className="dsh-left-column-count fw-medium pos-rl">375</div>
                            </div>
                            <div className="dsh-left-column-bottom mt-4">
                                <div className="dsh-left-column-card d-flex mb-3">
                                    <div className="dsh-left-column-card-icon">
                                        <IoIosPerson className="icon white-txt" />
                                    </div>
                                    <div className="dsh-left-column-card-text ml-3">
                                        <p className="para fs-13">Patient Name</p>
                                        <h6 className="h6">John Walker</h6>
                                    </div>
                                </div>
                                <div className="dsh-left-column-card d-flex mb-3">
                                    <div className="dsh-left-column-card-icon">
                                        <IoMdCard className="icon white-txt" />
                                    </div>
                                    <div className="dsh-left-column-card-text ml-3">
                                        <p className="para fs-13">Member Id</p>
                                        <h6 className="h6">2349093</h6>
                                    </div>
                                </div>
                                <div className="dsh-left-column-card d-flex mb-3">
                                    <div className="dsh-left-column-card-icon">
                                        <IoMdTransgender className="icon white-txt" />
                                    </div>
                                    <div className="dsh-left-column-card-text ml-3">
                                        <p className="para fs-13">Gender</p>
                                        <h6 className="h6">Male</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>

                    {/* Right Graphs */}
                    <Col sm={9}>
                        <Row>
                            <Col sm={6}>
                                <div className="chart-box mb-3">
                                    <Chart options={options} series={series} type="radialBar" />
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className="chart-box mb-3">
                                    <Chart options={options} series={series} type="radialBar" />
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className="chart-box mb-3">
                                    <Chart options={options} series={series} type="radialBar" />
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className="chart-box mb-3">
                                    <Chart options={options} series={series} type="radialBar" />
                                </div>
                            </Col>
                        </Row>
                    </Col>

                    {/* Bottom Line Graph */}
                    <Col sm={12}>
                        <div className="chart-box mb-5">
                            <LineChart />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Dashboard
