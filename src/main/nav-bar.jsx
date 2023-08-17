import "./nav-bar.css";
import HomeIcon from '@mui/icons-material/Home';
import CommentIcon from '@mui/icons-material/Comment';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddBoxIcon from '@mui/icons-material/AddBox';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { useState } from "react";

function Footer() {
    return (
        <footer>
            © 2023 H1 - GroupXWeb2
        </footer>
    )
}

export function NavBar() {
    const c1olor = 'rgb(7, 237, 206)';

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const iconStyle = {
        fontSize: 35,
        color: c1olor,
    };

    const iconStyle2 = {
        fontSize: 30,
    };

    return (
        <>
            <nav className={`nav ${isMenuOpen ? 'open' : 'closed'}`}>
                <div className="nav_interaction">
                    <div id="home_space" onClick={toggleMenu}>
                        <div>
                            <HomeIcon style={iconStyle} />
                            <div id="home-count">+15</div>
                        </div>
                        <p>Home</p>
                    </div>
                    <div id="message_space" onClick={toggleMenu}>
                        <div>
                            <CommentIcon style={iconStyle} />
                            <div id="message-count">10</div>
                        </div>

                        <p>Chat</p>
                    </div>
                    <div id="notif_space" onClick={toggleMenu}>
                        <div>
                            <NotificationsIcon style={iconStyle} />
                            <div id="notif-count">+15</div>
                        </div>
                        <p>Notifications</p>
                    </div>
                    <div id="Post_space" onClick={toggleMenu}>
                        <div>
                            <AddBoxIcon style={iconStyle} />
                        </div>
                        <p>New Post</p>
                    </div>
                </div>
                <div className="params_space" onClick={toggleMenu}>
                    <SettingsRoundedIcon style={iconStyle} />
                    <p>Settings</p>
                </div>

                <Footer></Footer>
            </nav>
            <div className={`nav-mobile ${!isMenuOpen ? 'open' : 'close'}`} onClick={toggleMenu}>
                <DoubleArrowIcon  style={iconStyle2}/>
            </div>
        </>
    )
}