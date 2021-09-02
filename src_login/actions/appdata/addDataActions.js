// External imports
import axios from 'axios'
// import { Route } from 'react-router-dom'
// import history from '../../App'

// Action Creators
export const GET_DATA = 'GET_DATA'
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS'
export const GET_DATA_FAILURE = 'GET_DATA_FAILURE'

// User Login Actions
export const GET_LOGIN = 'GET_LOGIN'
export const GET_LOGIN_SUCCESS = 'GET_LOGIN_SUCCESS'
export const GET_LOGIN_FAILURE = 'GET_LOGIN_FAILURE'
export const GET_LOGOUT = 'GET_LOGOUT'
export const CHECK_LOGIN = 'CHECK_LOGIN'

export const getLogin = () => ({ type: GET_LOGIN })

export const getLoginSuccessAction = () => ({ type: GET_LOGIN_SUCCESS })

export const getLoginFailure = () => ({ type: GET_LOGIN_FAILURE })

// Actions
export const getData = () => ({ type: GET_DATA })
export const getDataSuccess = (user) => ({ type: GET_DATA_SUCCESS, payload: user, })
export const getDataFailure = () => ({ type: GET_DATA_FAILURE })

export function fetchData() {
    return async dispatch => {
        dispatch(getData())

        try {
            const response = await axios.get("http://localhost:4000/auth")
            const user = await response.data
            console.log(user)
            dispatch(getDataSuccess(user))
        } catch (error) {
            dispatch(getDataFailure())
            console.error(error);
        }
    }
}

export function userLoginSuccess(loginCheck) {
    return async dispatch => {
        dispatch(getLogin())

        try {
            await axios.get("http://localhost:4000/auth").then(res => {
                console.log(res);
                const data = res.data
                const login = data.login
                if (data.username === loginCheck.username && data.password === loginCheck.password) {
                    axios.put("http://localhost:4000/auth", {
                        ...data, login: !login
                    }).then(res => {
                        dispatch(fetchData())
                        // <Route path="/dashboard" />
                        // history.push('/dashboard');
                        // window.location.href = window.host + '/dashboard';
                        localStorage.setItem('isAuth', !login)
                    })
                } else {
                    dispatch(getLoginFailure())
                    console.log()
                }
            })
        } catch (error) {
            // dispatch(getLoginFailure())
            console.error(error);
        }
    }
}

export function getLogoutSuccess() {
    return async dispatch => {
      dispatch(getLogin())
    //   dispatch(getLogout())
      try {
          const response = await axios.get("http://localhost:4000/auth")
          const user = await response.data
          const login = user.login
          console.log("logout " + user)
          axios.put("http://localhost:4000/auth", {
            ...user, login: !login
          }).then(res => {
            // dispatch(getLogout())
            localStorage.removeItem('isAuth')
            dispatch(fetchData())
          })
      } catch (error) {
          console.error(error);
      }
  }
  }