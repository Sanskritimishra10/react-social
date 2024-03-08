import "./login.css"

export default function login() {
  return (
    <div className="login">
<div className="loginWrapper">
    <div className="loginleft">
        <h3 className="loginLogo">FeedFrenzy</h3>
        <span className="loginDesc">Let's Connect</span>
    </div>
    <div className="loginRight">
        <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Login</button>
            <span className="loginForgot">Forgot password?</span>
            <button className="loginRegister">Create a new Account</button>
        </div>
    </div>
</div>
    </div>
  )
}
