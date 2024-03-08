import "./register.css"

export default function register() {
  return (
    <div className="login">
<div className="loginWrapper">
    <div className="loginleft">
        <h3 className="loginLogo">FeedFrenzy</h3>
        <span className="loginDesc">Let's Connect</span>
    </div>
    <div className="loginRight">
        <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Password again" className="loginInput" />
            <button className="loginButton">Sign up</button>
            {/* <span className="loginForgot">Forgot password?</span> */}
            <button className="loginRegister">Log in your account</button>
        </div>
    </div>
</div>
    </div>
  )
}
