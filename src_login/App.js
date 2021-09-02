// External imports
import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

// Local imports
import { fetchData } from './actions/appdata/addDataActions'

// import HomePage from './pages/HomePage'
import PrivateRoute from './components/PrivateRoute'
import Menu from './components/Menu'
import LoginPage from './pages/auth/LoginPage'
import DashboardPage from './pages/DashboardPage'
import ReportsPage from './pages/ReportsPage'
import TaskPage from './pages/TaskPage'
import ClientPage from './pages/ClientPage'
import TemplatesPage from './pages/TemplatesPage'
import PageNotFound from './pages/PageNotFound'

// export const history = useHistory();

const App = ({ dispatch, login }) => {
    useEffect(() => {
        dispatch(fetchData());
    })

    // alert(login)
    return (
        <Router>
            { login ? <Menu /> : null }
            <Switch>
                <Route path="/" component={LoginPage} exact={true} />
                <PrivateRoute path='/dashboard' component={DashboardPage} exact={true} />
                <PrivateRoute path="/reports" component={ReportsPage} />
                <PrivateRoute path="/task" component={TaskPage} />
                <PrivateRoute path="/client" component={ClientPage} />
                <PrivateRoute path="/templates" component={TemplatesPage} />
                <PrivateRoute component={PageNotFound} />
            </Switch>
        </Router>
    )
}

const mapStateToProps = state => ({
    login: state.user.user.login
})

export default connect(mapStateToProps)(App)