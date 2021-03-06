import { Search, Person, Chat, Notifications } from "@material-ui/icons"
import "./topbar.css" // "." means same file


export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">SocialBook</span>
            </div>
            <div className="topbarCenter"></div>
                <div className="searchbar">
                    <Search className="searchIcon"/>
                    <input placeholder="Search for friend, post or video" className="searchInput"/>
                </div> 
            <div className="topbarRight">
                <span className="topbarLink">Homepage</span>
                <span className="topbarLink">Timeline</span>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <Person/>
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <Chat/>
                    <span className="topbarIconBadge">2</span>
                </div>
                <div className="topbarIconItem">
                    <Notifications/> 
                    <span className="topbarIconBadge">3</span>
                </div>
            </div>
            <img src="\assets\person\1.jpeg" alt="profile pic" className="topbarImg"/> 
        </div>
    )
}

/*
To access img src, simply give image path. 
By default, react will know its in public directory
*/