import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Post() {
    return (
        <div className="Post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="/assets/person/1.jpeg" alt="" className="postProfileImg"/>
                        <span className="postUsername">Isaac Macandog</span>
                        <span className="postDate">5 min ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVertIcon/>
                    </div>
                </div>
                <div className="postCenter">
                    <div className="postText">Hi this is my first post :)</div>
                    <img src="assets/post/1.jpeg" alt="" className="postImg"/>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="assets/like.png" alt="" />
                        <img  className="likeIcon" src="assets/heart.png" alt="" />
                        <span className="numberofLikes">30 people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postcomments">9 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
