// External imports
import React, { useEffect } from "react"
import {connect} from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'

// Local imports
// import { getLoginSuccessAction } from '../actions/loginActions'

const TaskPage = ({ dispatch, login }) => {
    useEffect(() => {
        // dispatch(getLoginSuccessAction());
    });
    return (
        <React.Fragment>
            <div className="page-wrap">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="page-heading mb-3">
                                <h2 className="h2 mb-0 pb-0">Task Page</h2>
                                <span className="line"></span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    login: state.user.user.login
})
  
export default connect(mapStateToProps)(TaskPage)