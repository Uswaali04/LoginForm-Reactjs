import React from 'react'
import LoginOptions from './LoginOptions'

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
                        <div className="password">
                            <div className="field">
                                <label for="password" className="label">Password</label><br />

                                <input type="password" id="password" name="password" /><br />
                                <span className="password-logo">
                                    <svg width="15px" height="15px" viewBox="0 0 28 28" fill="none">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0" />
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"
                                            stroke="#CCCCCC" stroke-width="0.56" />
                                        <g id="SVGRepo_iconCarrier">
                                            <path clip-rule="evenodd"
                                                d="M22.6928 1.55018C22.3102 1.32626 21.8209 1.45915 21.6 1.84698L19.1533 6.14375C17.4864 5.36351 15.7609 4.96457 14.0142 4.96457C9.32104 4.96457 4.781 7.84644 1.11993 13.2641L1.10541 13.2854L1.09271 13.3038C0.970762 13.4784 0.967649 13.6837 1.0921 13.8563C3.79364 17.8691 6.97705 20.4972 10.3484 21.6018L8.39935 25.0222C8.1784 25.4101 8.30951 25.906 8.69214 26.1299L9.03857 26.3326C9.4212 26.5565 9.91046 26.4237 10.1314 26.0358L23.332 2.86058C23.553 2.47275 23.4219 1.97684 23.0392 1.75291L22.6928 1.55018ZM18.092 8.00705C16.7353 7.40974 15.3654 7.1186 14.0142 7.1186C10.6042 7.1186 7.07416 8.97311 3.93908 12.9239C3.63812 13.3032 3.63812 13.8561 3.93908 14.2354C6.28912 17.197 8.86102 18.9811 11.438 19.689L12.7855 17.3232C11.2462 16.8322 9.97333 15.4627 9.97333 13.5818C9.97333 11.2026 11.7969 9.27368 14.046 9.27368C15.0842 9.27368 16.0317 9.68468 16.7511 10.3612L18.092 8.00705ZM15.639 12.3137C15.2926 11.7767 14.7231 11.4277 14.046 11.4277C12.9205 11.4277 12 12.3906 12 13.5802C12 14.3664 12.8432 15.2851 13.9024 15.3624L15.639 12.3137Z"
                                                fill="#000000" fill-rule="evenodd" />
                                            <path
                                                d="M14.6873 22.1761C19.1311 21.9148 23.4056 19.0687 26.8864 13.931C26.9593 13.8234 27 13.7121 27 13.5797C27 13.4535 26.965 13.3481 26.8956 13.2455C25.5579 11.2677 24.1025 9.62885 22.5652 8.34557L21.506 10.2052C22.3887 10.9653 23.2531 11.87 24.0894 12.9239C24.3904 13.3032 24.3904 13.8561 24.0894 14.2354C21.5676 17.4135 18.7903 19.2357 16.0254 19.827L14.6873 22.1761Z"
                                                fill="#000000" />
                                        </g>
                                    </svg>
                                </span>
                            </div>
                        </div>

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
