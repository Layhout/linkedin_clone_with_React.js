import "./Header.css"
import SearchIcon from "@material-ui/icons/Search"
import HeaderOption from "./HeaderOption"
import HomeIcon from "@material-ui/icons/Home"
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount"

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://cdn3.iconfinder.com/data/icons/inficons/512/linkedin.png" alt="" />
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
            </div>
        </div>
    )
}

export default Header
