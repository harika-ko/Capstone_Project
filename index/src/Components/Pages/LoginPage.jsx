import fire from "../../fire";
import { auth } from "firebase";
import { useState, useEffect } from "react";
import HomePageFinal from '../Pages/HomePageFinal'
import { Container, Row, Col, Image, Form } from 'react-bootstrap';
import food1 from '../../Assets/food_1.jpeg';
import "../../css/Mainpage.css";

const Login = () => {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setpasswordError] = useState("");
    const [hasAccount, setHasAccount] = useState(false);

    const clearInputs = () => {
        setEmail("");
        setPassword("");
    };

    const clearErrors = () => {
        setEmailError("");
        setpasswordError("");
    };

    const handleLogin = () => {
        clearErrors();
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch((err) => {
                switch (err.code) {
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setpasswordError(err.message);
                        break;
                }
            });
    };

    const handleLogout = () => {
        fire.auth().signOut();
    };

    const handleSignup = () => {
        clearErrors();
        fire
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch((err) => {
                switch (err.code) {
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(err.message);
                        break;
                    case "auth/weak-password":
                        setpasswordError(err.message);
                        break;
                }
            });
    };


    const authListener = () => {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                clearInputs();
                setUser(user);
            } else {
                setUser("");
            }
        });
    };

    useEffect(() => {
        authListener();
    }, []);

    return (
        <>
            {user ? (
                <HomePageFinal handleLogout={handleLogout} user={user} />
            ) : (
                <div className="hero_sec">
                    <div className="main_sec">
                        <Container className="main_cont">
                            <Row xs={12}>
                                <Col className="col-style">
                                    <h2 className="main_head">Food<span style={{ color: "#34B267" }}>Mood</span></h2>
                                    <h1 className="mt-4">No.1 Platform <br />For All Food <br />Related Content</h1>
                                    <p className="first-para">Want to cook yummy recipes which are also healthy? </p>
                                    <p className="second-para">No need to worry!</p>
                                    {hasAccount ? <h4 className="sign">LOG IN</h4> : <h4 className="sign">SIGN UP</h4>}
                                    <div style={{ marginTop: "1rem" }}>
                                        <Form.Label className="form-label" >Email Address</Form.Label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            autoFocus
                                            required
                                            value={email}
                                            placeholder="Enter your Email Address"
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <p className="errorMsg">{emailError}</p>
                                    </div>
                                    <div style={{ marginTop: "1rem" }}>
                                        <Form.Label className="form-label">Password</Form.Label>
                                        <input
                                            className="form-control"
                                            type="password"
                                            required
                                            value={password}
                                            placeholder="Enter your password"
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <p className="errorMsg">{passwordError}</p>
                                    </div>

                                    <div className="btnContainer" style={{ marginTop: "0.9rem" }}>
                                        {hasAccount ? (
                                            <>
                                                <p className="account">
                                                    Don't have an Account ?{" "}
                                                    <span onClick={() => setHasAccount(!hasAccount)} style={{ color: "#34B267", cursor: "pointer" }}>
                                                        Sign up
                                                    </span>
                                                </p>
                                                <button variant="success" className="register-button" onClick={handleLogin}
                                                >
                                                    <b>SIGN IN</b>
                                                </button>

                                            </>
                                        ) : (
                                            <>
                                                <p className="account">
                                                    Have an Account?{" "}
                                                    <span onClick={() => setHasAccount(!hasAccount)} style={{ color: "#34B267", cursor: "pointer" }}>
                                                        Sign in
                                                    </span>
                                                </p>
                                                <button className="register-button" onClick={handleSignup}>
                                                    <b>SIGN UP</b>
                                                </button>

                                            </>
                                        )}
                                    </div>

                                </Col>
                                <Image src={food1} style={{
                                    height: "500px",
                                    width: "500px",
                                    overflow: "hidden",
                                    marginRight: "1rem"
                                }}></Image>
                            </Row>
                        </Container>
                    </div>
                </div>
            )
            }
        </>
    );
};

export default Login;