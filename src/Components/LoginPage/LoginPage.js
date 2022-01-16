import React, { useState } from 'react'
import './LoginPage.css'
import { Link } from 'react-router-dom'
import Input from '../Input/Input'

const LoginPage = () => {
  const [form, setForm] = useState({ email: '', password: '' })

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }
  return (
    <div className="Login">
      <div className="container">
        <div className="form">
          <div className="form-input">
            <img src="./assets/logo.png" alt="logo" />
            <p className="header">Login</p>
            <Input
              type={'text'}
              name="email"
              value={form.email}
              onChange={handleChange}
            />
            <Input
              type={'password'}
              name="password"
              value={form.password}
              onChange={handleChange}
            />
            <p style={{ marginTop: '-15px' }} className="forgot">
              Forgot Password?
            </p>
            <button className="sign">Sign in</button>
            <p className="link-menu">or continue with</p>
            <div className="link-button">
              <button>
                <img src="./assets/bi-google.png" />
              </button>
              <button>
                <img src="./assets/bi-github.png" />
              </button>
              <button>
                <img src="./assets/bi_facebook.jpg" />
              </button>
            </div>
            <p className="account">
              Don't yet an account yet?
              <span>
                <Link to="/register">
                  <a href="#">Register for free</a>
                </Link>
              </span>
            </p>
          </div>
        </div>
        <div className="avatar">
          <img src="./assets/my-avatar.jpg" />
        </div>
      </div>
    </div>
  )
}

export default LoginPage
