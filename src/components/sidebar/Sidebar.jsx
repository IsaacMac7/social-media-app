import "./sidebar.css"
import { RssFeed } from "@material-ui/icons" 

export default function Sidebar() {
    return (
        <div className="sideBar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListIem">
                        <RssFeed className="sidebarIcon"/>
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
