import { Avatar } from "@material-ui/core"
import { useSelector } from "react-redux"
import { selectUser } from "./features/userSlice";
import "./Sidebar.css"

const Sidebar = () => {
    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://2.bp.blogspot.com/-ZfnOTYS5N28/XOlXukcvsiI/AAAAAAAADIU/OyFzbIRUNo0eCZCgI9fZuvX5ERlM8nQgwCKgBGAs/w1920-h1080-c/anime-scenery-city-buildings-silhouette-uhdpaper.com-8K-177.jpg" alt="" />
                <Avatar className="sidebar__avatar" src={user.photoUrl}>{user.email[0].toUpperCase()}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber" >2,543</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber" >2,448</p>
                </div>
            </div>
            <div className="sidebar__botton">
                <p>Recent</p>
                {recentItem("react.js")}
                {recentItem("programming")}
                {recentItem("softwareengineering")}
                {recentItem("design")}
                {recentItem("developer")}
            </div>
        </div>
    )
}

export default Sidebar
