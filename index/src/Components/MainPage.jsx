const MainPage = (props) => {

    const { email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError } = props;

    return (
        <section className="login">
            <div className="loginContainer">
                <label>UserName</label>
                <input type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)} />
                <p className="errMsg">{emailError}</p>

                <label>Password</label>
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                <p className="errMsg">{passwordError}</p>

                <div class="btnContainer">
                    {hasAccount ? (
                        <>
                            <button onClick={handleLogin}>Sign In</button>
                            <p>Don't have an Account? <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
                        </>) : (
                        <>
                            <button onClick={handleSignup}>Sign Up</button>
                            <p>Have an Account? <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span></p>
                        </>)
                    }
                </div>
            </div>
        </section>

    )
}


export default MainPage



