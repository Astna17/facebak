import userimage from '../teste-files/toonmecom_d28076.jpeg'; //for test
import './body.css';
export function Main() {
    return (
        <div className='main_container'>
            <header>
                <div className="logo_f"><span id="F">F</span>-acebak</div>
                <div id="liaison">liasion</div>
                <div className="profil_name_bar_contain">
                    <div className="profil_name_space">
                        <div className="profil_image_space" >
                            <img src={userimage} alt="User" />
                        </div>
                        <p>Tiana-Finaritra</p>
                    </div>
                    <div className="three_bars">
                        <div id="bar1">bar1</div>
                        <div id="bar2">bar2</div>
                        <div id="bar3">bar3</div>
                    </div>
                </div>
            </header>

            <div className="nav_modules_container">
                <nav>
                    <div className="nav_interaction">
                        <div id="home_space">
                            <i>Home</i>
                        </div>
                        <div id="message_space">
                            <i>message</i>
                        </div>
                        <div id="notif_space">
                            <i>notif</i>
                        </div>
                        <div id="Post_space">
                            <i>Post</i>
                        </div>
                    </div>
                    <div className="params_space">
                        <i>Params</i>
                    </div>
                </nav>
                <div className="modules_container">
                    module_container
                </div>
            </div>
        </div>
    )
}