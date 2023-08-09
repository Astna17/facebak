import "./nav-bar.css";
import HomeIcon from '@mui/icons-material/Home';
import CommentIcon from '@mui/icons-material/Comment';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddBoxIcon from '@mui/icons-material/AddBox';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

function Footer () {
    return (
        <footer>
            © 2023 H1 - GroupXWeb2
        </footer>
    )
}

export function NavBar() {
    const c1olor = 'rgb(7, 237, 206)';

    const iconStyle = {
        fontSize: 35,
        color: c1olor,
    };

    return (
        <nav>
            <div className="nav_interaction">
                <div id="home_space">
                    <div>
                        <HomeIcon style={iconStyle} />
                        <div id="home-count">+15</div>
                    </div>
                    <p>Home</p>
                </div>
                <div id="message_space">
                    <div>
                        <CommentIcon style={iconStyle} />
                        <div id="message-count">10</div>
                    </div>

                    <p>Chat</p>
                </div>
                <div id="notif_space">
                    <div>
                        <NotificationsIcon style={iconStyle} />
                        <div id="notif-count">+15</div>
                    </div>
                    <p>Notifications</p>
                </div>
                <div id="Post_space">
                    <div>
                    <AddBoxIcon style={iconStyle} />
                    </div>
                    <p>New Post</p>
                </div>
            </div>
            <div className="params_space">
                <SettingsRoundedIcon style={iconStyle} />
                <p>Settings</p>
            </div>

            <Footer></Footer>
        </nav>
    )
}