import "./feed.css"
import Share from "../share/Share"
import Post from "../post/Post"

export default function Feed() {
    return (
        <div className="Feed">
            <div className="feedwrapper">
                <Share/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}
