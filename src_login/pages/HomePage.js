// External imports
import React, { useEffect } from "react"
import {connect} from 'react-redux'

// Local imports
import { fetchData } from '../actions/appdata/addDataActions'
import DashboardPage from "./DashboardPage"
import LoginPage from "./auth/LoginPage"

const HomePage = ({ dispatch, login }) => {
    useEffect(() => {
        dispatch(fetchData());
    });

    return (
        <React.Fragment>
                { login ? <DashboardPage /> : <LoginPage /> }
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    login: state.user.user.login
})
  
export default connect(mapStateToProps)(HomePage)