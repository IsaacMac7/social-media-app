/*
Bugs to fix:
- sidebar button is not complete

*/

import "./sidebar.css"
import PeopleIcon from '@mui/icons-material/People';
import GroupsIcon from '@mui/icons-material/Groups';
import StorefrontIcon from '@mui/icons-material/Storefront';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import HistoryIcon from '@mui/icons-material/History';


export default function Sidebar() {
    return (
        <div className="sideBar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <img src="/assets/person/1.jpeg" alt="profile pic" className="pfp"/>
                        <span className="sidebarListItemText">Me</span>
                    </li>
                    <li className="sidebarListItem">
                        <PeopleIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Friends</span>
                    </li>
                    <li className="sidebarListItem">
                        <GroupsIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <StorefrontIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">MarketPlace</span>
                    </li>
                    <li className="sidebarListItem">
                        <OndemandVideoIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Watch</span>
                    </li>
                    <li className="sidebarListItem">
                        <HistoryIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Memories</span>
                    </li>
                    <li className="sidebarListItem">
                        <button className="sidebarButton">^</button>
                        <span className="sidebarListItemText">See More</span>
                    </li>
                </ul>
                <hr className="sidebarHr" /> 
                <ul className="sidebarShortcutList">
                    <li className="sidebarShortcuts">
                        <img src="/assets/appIcons/angrybirds.png" alt="angry birds app" className="shortcutIcons" />
                        <span className="sidebarAppName">AngryBirds</span>
                    </li>
                    <li className="sidebarShortcuts">
                        <img src="/assets/appIcons/amazon.png" alt="amazon app" className="shortcutIcons" />
                        <span className="sidebarAppName">Amazon</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
