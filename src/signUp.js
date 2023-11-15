import React from 'react'
import { Link } from 'react-router-dom'

const signUp = () => {
  return (
    <div className="login-section padding-top padding-bottom">
    <div className=" container">
        <div className="account-wrapper">
            <div className="account-title">
                <h2>Sign Up</h2>
                <p>Enter your all information to create a new account</p>
            </div>

            <form className="account-form">
                <div className="form-group">
                    <input type="text" placeholder="First Name" name="Fname"/>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Last Name" name="Lname"/>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Email" name="email"/>
                </div>
                <div className="form-group">
                    <input type="password" placeholder="Password" name="password"/>
                </div>
                <div className="form-group">
                    <input type="password" placeholder="Confirm Password" name="password"/>
                </div>
                <div className="form-group">
                    <button className="d-block default-btn"><span>Create Account</span></button>
                </div>
            </form>
            <div className="account-bottom">
                <span className="d-block cate pt-10">Have any Account? <Link to={'/login'}> Login</Link></span>
                
            </div>
        </div>
    </div>
</div>
  )
}

export default signUp