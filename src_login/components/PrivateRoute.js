
import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

export const PrivateRoute = ({ login, component: Component, ...rest }) => {
    const isLoggedIn = localStorage.getItem('isAuth');
    
    // alert(isLoggedIn)
    return <Route {...rest} component={(props) => (
        isLoggedIn ? (<Component {...props} />) : (<Redirect to="/" />)
    )} />
}

const mapStateToProps = state => ({
    login: state.user.user.login
})

export default connect(mapStateToProps)(PrivateRoute)