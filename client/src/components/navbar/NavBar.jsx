import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from "react";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false:true)
    return () => window.onscroll = null
  };
  console.log(isScrolled)
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
          <div className="left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/220px-Netflix_2015_logo.svg.png" alt="Netflix_Logo" />
            <span>Homepage</span> 
            <span>Series</span> 
            <span>Movies</span> 
            <span>New and Popular</span>
            <span>My List</span>  
          </div>
          <div className="right">
            <SearchIcon className="icon"/>
            <span>KID</span>
            <NotificationsNoneIcon className="icon"/>
            <img src="https://i.pinimg.com/originals/54/f6/0f/54f60fb26ba707521de8d59d7305c3ea.jpg" alt="pfp" />
            
            <div className="profile">
              <ArrowDropDownIcon className="icon"/> 
              <div className="options">
                  <span>Settings</span>
                  <span>Logout</span>
                </div>       
            </div>

          </div>
        </div>       
    </div>
  )
}
