import React, { useState } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'

function Forms() {
    const [radioStatus, setRadioStatus] = useState(0)

    const radioHandler = status => {
        setRadioStatus(status)
    }

    return (
        <div className="forms-wrapper">
            <h3 className="h3 mb-3">Reports Form</h3>
            <Form>
                <Form.Check
                    type="radio"
                    id={`form-1`}
                    name="forms"
                    label="Device Connections"
                    checked={radioStatus === 1}
                    onClick={() => radioHandler(1)}
                />
                <Form.Check
                    type="radio"
                    id={`form-2`}
                    name="forms"
                    label="Gift Card Reports"
                    checked={radioStatus === 2}
                    onClick={() => radioHandler(2)}
                />
                <Form.Check
                    type="radio"
                    id={`form-3`}
                    name="forms"
                    label="Activity Configured Clients Reports"
                    checked={radioStatus === 3}
                    onClick={() => radioHandler(3)}
                />
            </Form>

            <div className="form-result mt-4">
                {radioStatus === 1 && (
                    <div className="form-result-1">
                        <h4 className="h4 mb-2">Result</h4>
                        <h6 className="h6 mb-2">Device Connections</h6>
                        <Form>
                            <Row>
                                <Col sm={4} md={3}>
                                    <Form.Group className="mb-3" controlId="input1">
                                        <Form.Label>Input 1</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col sm={4} md={3}>
                                    <Form.Group className="mb-3" controlId="input2">
                                        <Form.Label>Input 2</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col sm={4} md={3}>
                                    <Form.Group className="mb-3" controlId="input3">
                                        <Form.Label>Input 3</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>

                                <Col sm={12} md={12}>
                                    <Button variant="primary" type="submit">Submit</Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                )}
                {radioStatus === 2 && (
                    <div className="form-result-2">
                        <h4 className="h4 mb-2">Result</h4>
                        <h6 className="h6 mb-2">Gift Card Reports</h6>
                        <Form>
                            <Row>
                                <Col sm={4} md={3}>
                                    <Form.Group className="mb-3" controlId="input1">
                                        <Form.Label>Input 1</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col sm={4} md={3}>
                                    <Form.Group className="mb-3" controlId="input2">
                                        <Form.Label>Input 2</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col sm={4} md={3}>
                                    <Form.Group className="mb-3" controlId="input3">
                                        <Form.Label>Input 3</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col sm={4} md={3}>
                                    <Form.Group className="mb-3" controlId="input4">
                                        <Form.Label>Input 4</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col sm={4} md={3}>
                                    <Form.Group className="mb-3" controlId="input5">
                                        <Form.Label>Input 5</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>

                                <Col sm={12} md={12}>
                                    <Button variant="primary" type="submit">Submit</Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                )}
                {radioStatus === 3 && (
                    <div className="form-result-3">
                        <h4 className="h4 mb-2">Result</h4>
                        <h6 className="h6 mb-2">Activity Configured Clients Reports</h6>
                        <Form>
                            <Row>
                                <Col sm={4} md={3}>
                                    <Form.Group className="mb-3" controlId="input1">
                                        <Form.Label>Input 1</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col sm={4} md={3}>
                                    <Form.Group className="mb-3" controlId="input2">
                                        <Form.Label>Input 2</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col sm={4} md={3}>
                                    <Form.Group className="mb-3" controlId="input3">
                                        <Form.Label>Input 3</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col sm={4} md={3}>
                                    <Form.Group className="mb-3" controlId="input4">
                                        <Form.Label>Input 4</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col sm={4} md={3}>
                                    <Form.Group className="mb-3" controlId="input5">
                                        <Form.Label>Input 5</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col sm={4} md={3}>
                                    <Form.Group className="mb-3" controlId="input6">
                                        <Form.Label>Input 6</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col sm={4} md={3}>
                                    <Form.Group className="mb-3" controlId="input7">
                                        <Form.Label>Input 7</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>

                                <Col sm={12} md={12}>
                                    <Button variant="primary" type="submit">Submit</Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Forms
