import Topbar from "../../components/topbar/Topbar" //".." means to go out of current file
import Sidebar from "../../components/sidebar/Sidebar" 
import Rightbar from "../../components/rightbar/Rightbar" 
import Feed from "../../components/feed/Feed" 
import "./home.css"
/* line 10 allows multiple components seperately, these are called Fragments*/

export default function Home() {
    return (
        <> 
        <Topbar/>
        <div className="homeContainer">
            <Sidebar/>
            <Feed/>
            <Rightbar/>
        </div>
        </>
    )
}
