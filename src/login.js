import React from 'react'

const login = () => {
  return (
    <div className="login-section padding-top padding-bottom">
        <div className=" container">
            <div className="account-wrapper">
                <div className="account-title">
                    <h2>Login</h2>
                    <p>Enter your email address and password to get access your account</p>
                </div>

                <form className="account-form">
                    <div className="form-group">
                        <input type="text" placeholder="User Name" name="username"/>
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Password" name="password"/>
                    </div>
                    <div className="form-group">
                        <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                            <div className="checkgroup">
                                <input type="checkbox" name="remember" id="remember"/>
                                <label for="remember">Remember Me</label>
                            </div>
                            <a href="reset-pass.html">Forget Password?</a>
                        </div>
                    </div>
                    <div className="form-group">
                        <button className="default-btn"><span>Login Now</span></button>
                    </div>
                </form>
                <div className="account-bottom">
                    <span className="d-block cate pt-10">Don’t Have any Account? <a href="signup.html"> Sign
                            Up</a></span>
                  
                </div>
            </div>
        </div>
    </div>
  )
}

export default login