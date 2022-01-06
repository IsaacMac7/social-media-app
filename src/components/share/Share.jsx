import "./share.css"
import VideoCallIcon from '@mui/icons-material/VideoCall';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

export default function Share() {
    return (
        <div className="Share">
            <div className="sharewrapper">
                <div className="shareTop">
                    <img src="assets/person/1.jpeg" alt="me" className="shareProfileImg"/>
                    <input placeholder="What's in your mind?" className="shareInput"/>
                </div>
                <hr className="shareHr"/>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <VideoCallIcon htmlColor="red" className="shareIcon"/>
                            <span className="shareOptionText">Live Video</span>
                        </div>
                        <div className="shareOption">
                            <PermMediaIcon htmlColor="green" className="shareIcon"/>
                            <span className="shareOptionText">Photo/Video</span>
                        </div>
                        <div className="shareOption">
                            <SentimentVerySatisfiedIcon htmlColor="yellow" className="shareIcon"/>
                            <span className="shareOptionText">Feeling/activity</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
