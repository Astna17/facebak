import React from 'react';
import "./sign-up.css";
import "./sign-up.jsx";
import couverture from "../../assets/teste-files/couverture.png";
import ev from "../../utils/eventHandler.jsx";

export function Login() {
    const handleLogin = () => {
        window.location.href = '/home';
    };

    return (
        <div className="rowD">
            <div className="intro columnD">
                <div>
                    Explore new horizons with <b id="F">F</b><b>-acebak</b><br />
                    <h2 className="h2">Immerse yourself in a captivating universe <br /> and get ready to be dazzled!</h2>
                </div>
                <img src={couverture} alt="user"/>
            </div>
            <div className="login">
                <h1 className="h1">Log in </h1>
                <form className="form">
                    <label  className="label">Email</label>
                    <input className="input" type="email" id="email" />
                    <label  className="label">Password</label>
                    <input className="input" type="password" id="password" />
                    <button id="submitSignUp" onClick={handleLogin}>Log in</button>
                    <p>If you don't have an account <button onClick={() => ev.goToPage('/signup')}>Sign up</button></p>
                </form>
            </div>
        </div>
    );
}
