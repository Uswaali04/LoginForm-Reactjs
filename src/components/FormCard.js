import React from 'react'
import LoginOptions from './LoginOptions'
import PasswordField from './PassowrdField'

export default function FormCard() {
    return (
        <div>
            <form className="form-card">
                <div className="form-center">
                    <div className="form-header">
                        <h2>Login</h2>
                    </div>
                    <div className="inputs">
                        <div className="field">
                            <label for="email" className="label">Email</label><br />
                            <input type="email" id="email" name="email" /><br />
                            <span className="email-logo">
                                <svg width="12px" height="12px" viewBox="0 0 24 24" fill="none">
                                    <g id="style=linear">
                                        <g id="email">
                                            <path id="vector"
                                                d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                                                stroke="#000000" stroke-width="1.5" stroke-miterlimit="10"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                            <path id="vector_2"
                                                d="M18.7698 7.7688L13.2228 12.0551C12.5025 12.6116 11.4973 12.6116 10.777 12.0551L5.22998 7.7688"
                                                stroke="#000000" stroke-width="1.5" stroke-linecap="round" />
                                        </g>
                                    </g>
                                </svg>
                            </span>
                        </div>
                        <PasswordField/>
                        <div className="end fpdesign">Forgot Password?</div>
                    </div>
                    <div>
                        <button className="btn">Log In</button>
                    </div>
                    <LoginOptions/>
                </div>
            </form>
        </div>
    )
}
