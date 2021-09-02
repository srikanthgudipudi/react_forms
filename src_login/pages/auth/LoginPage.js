// External imports
import React, { useState, useEffect } from "react"
import { Form, Image, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import LineIcon from 'react-lineicons'

// Local imports
import { fetchData } from '../../actions/appdata/addDataActions'
import { userLoginSuccess } from '../../actions/appdata/addDataActions'

// Assets
import logo from '../../assets/images/prime-logo.png'
import { useHistory } from "react-router-dom"

const LoginPage = ({ dispatch, login, hasErrors }) => {
    const initialState = { username: "", password: "" }
    const [loginCheck, setLoginCheck] = useState(initialState)
    const [disable, setDisable] = useState(true)
    const history = useHistory()

    useEffect(() => {
        dispatch(fetchData());
        if(login){
            history.push("/dashboard")
        }
    });

    const enableLogin = () => {
        if(loginCheck.username.length > 0 && loginCheck.password.length > 0){
            setDisable(false)
        }else{
            setDisable(true)
        }
    }

    // Login fn
    const handleInputChange = event => {
        const { name, value } = event.target

        setLoginCheck({ ...loginCheck, [name]: value.trim() });
        enableLogin()        
    }

    const loginSubmit = (e) => {        
        e.preventDefault();
        dispatch(userLoginSuccess(loginCheck))
        setDisable(true)
        setLoginCheck(initialState)
    }

    return (
        <React.Fragment>
            <div className="login">
                <Form className="form" onSubmit={loginSubmit}>
                    <div className="text-center mb-5">
                        <Image src={logo} alt="Logo" className="logo" />
                    </div>
                    <div className="login-form-body">
                        { hasErrors ? <p className="text-center err-msg">Plase enter valid username and password.</p> : null}
                        <Form.Group>
                            <Form.Label>Username<span className="required">*</span></Form.Label>
                            <Form.Control type="text" required autoFocus name="username" onChange={handleInputChange} value={loginCheck.username} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password<span className="required">*</span></Form.Label>
                            <Form.Control type="password" required name="password" onChange={handleInputChange} value={loginCheck.password} />
                        </Form.Group>
                    </div>
                    <div className="login-form-footer">
                        <Button variant="warning" className="btn-block mt-4" type="submit" disabled={disable}><LineIcon  name={ hasErrors ? "spinner" : "unlock" } /> Login</Button>
                    </div>
                </Form>
            </div>
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    login: state.user.user.login,
    hasErrors: state.user.hasErrors
})

export default connect(mapStateToProps)(LoginPage)