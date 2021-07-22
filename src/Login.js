import "./Login.css"

function Login() {
    const handleRegister = () => {

    }
    const handleLogin = () => {

    }

    return (
        <div className="login">
            <img src="https://logos-download.com/wp-content/uploads/2016/03/LinkedIn_Logo_2003.png" alt="" />
            <form>
                <input type="text" placeholder="Full name (required if registering)" />
                <input type="text" placeholder="Profile pic URL (optional)" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit" onClick={handleLogin}>Sign In</button>
            </form>
            <p>Not a member? <span className="login__register" onClick={handleRegister}> Register Now</span> </p>
        </div>
    )
}

export default Login
