import "./1-post-list.css";
import { PostIteme } from "./post-item";

export function PostList() {
    return (
        <div className="post-list-container">
            <div className="post-list-space">
                <PostIteme />
            </div>

        </div>
    )
}