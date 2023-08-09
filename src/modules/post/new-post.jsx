import "./new-post.css";
import AddPhotoAlternateRoundedIcon from '@mui/icons-material/AddPhotoAlternateRounded';
import VideoFileIcon from '@mui/icons-material/VideoFile';
import TextFieldsIcon from '@mui/icons-material/TextFields';

export function NewPost() {
    const c1olor = 'rgb(7, 237, 206)';

    const iconStyle = {
        fontSize: 50,
        color: c1olor,
    };

    return (
        <div className="new-post-container">
            <div className="Post-left">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eligendi eius voluptas quam, maiores commodi tempore
                voluptatibus? Magni facilis ipsa vero ut, q
            </div>

            <form action="Post">
                <div className="input-desciption-container">
                    <textarea name="post-description"
                        placeholder="Set your post's description..."
                        id="post-description" ></textarea>
                </div>

                <div className="post-required">
                    <div id="Photo">
                        <AddPhotoAlternateRoundedIcon style={iconStyle} />
                        <p>Photo</p>
                    </div>
                    <div id="Video">
                        <VideoFileIcon style={iconStyle} />
                        <p>Vidéo</p>
                    </div>
                    <div id="Text">
                        <TextFieldsIcon style={iconStyle} />
                        <p>Text</p>
                    </div>
                </div>

                <div className="post-content-container">
                    <div id="post-content-slide">
                        You have upload
                    </div>
                </div>
                <div></div>
                <button className="post-btn" type="submit">POST</button>
            </form>

        </div>
    )
}