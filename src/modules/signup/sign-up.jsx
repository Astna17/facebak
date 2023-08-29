import "./sign-up.css";
import couverture from "../../assets/teste-files/couverture.png";
import ev from "../../utils/eventHandler";

export function SignUp() {
    return (
        <div className="rowD" onClick={ev.goToPage('/home')}>
            <div className="intro columnD">
                <div>
                    Explore new horizons with <b id="F">F</b><b>-acebak</b><br />
                    <h2 className="h2">Immerse yourself in a captivating universe <br /> and get ready to be dazzled!</h2>
                </div>
                <img src={couverture} alt="couverture" />
            </div>
            <div className="login">
                <h1 className="h2">Sign in </h1>
                <form className="form">
                    <label  className="label">Email</label>
                    <input className="input"  type="email" id="email" />
                    <label  className="label">Password</label>
                    <input className="input" type="password" id="password" />
                    <label  className="label">Confirm Password</label>
                    <input className="input" type="password" id="confirmPassword" />
                    <label  className="label">Username</label>
                    <input className="input" type="text" id="username" />
                    <button
                        
                     id="submitSignUp"  >Submit</button>
                </form>
            </div>


        </div>
    )
}