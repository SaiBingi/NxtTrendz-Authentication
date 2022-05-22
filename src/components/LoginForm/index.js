import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', isFormSubmitted: false, errorMsg: ''}

  onChangeUsernameField = event => this.setState({username: event.target.value})

  onChangePasswordField = event => this.setState({password: event.target.value})

  onLoginSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onLoginSuccess()
    } else {
      this.setState({isFormSubmitted: true, errorMsg: data.error_msg})
    }
  }

  renderUsername = () => {
    const {username} = this.state

    return (
      <>
        <label htmlFor="username" className="input-label">
          USERNAME
        </label>
        <div>
          <input
            id="username"
            type="text"
            className="input"
            placeholder="Username"
            value={username}
            onChange={this.onChangeUsernameField}
          />
        </div>
      </>
    )
  }

  renderPassword = () => {
    const {password} = this.state

    return (
      <>
        <label htmlFor="password" className="input-label">
          PASSWORD
        </label>
        <div>
          <input
            id="password"
            type="password"
            className="input"
            placeholder="Password"
            value={password}
            onChange={this.onChangePasswordField}
          />
        </div>
      </>
    )
  }

  render() {
    const {isFormSubmitted, errorMsg} = this.state

    return (
      <div className="bg-container-2">
        <div className="container-2">
          <div className="website-login-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="website-login-logo-mobile-view"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
              alt="website login"
              className="website-login-image"
            />

            <form
              className="login-details-container"
              onSubmit={this.onSubmitForm}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                alt="website logo"
                className="website-login-logo"
              />

              <div>{this.renderUsername()}</div>
              <div>{this.renderPassword()}</div>
              <button type="submit" className="login-button">
                Login
              </button>
              {isFormSubmitted && <p className="error-msg">*{errorMsg}</p>}
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm
