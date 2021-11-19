import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  //when you scroll down its going to show the black navbar
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />

          <Link to="/Home" className="link">
          <span>Home</span>
          </Link>

          <Link to="/TV Shows" className="link">
          <span>TV Shows</span>
          </Link>

          <span>Movies</span>
          <span>New & Popular</span>
          <span>My List</span>
        </div>


        
        <div className="right">

          <Search className="icon" />
          
          <Notifications className="icon" />
          <img
            src="https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg" alt=""
          />

          <div className="avatar-profile">
            <ArrowDropDown className="icon" />
            <div className="options">
           
             <img
             src="https://ih0.redbubble.net/image.618363037.0853/flat,1000x1000,075,f.u2.jpg" 
             alt=""
             />
            <img
             src="https://cdn.dribbble.com/users/2338264/screenshots/6859035/attachments/1462872/owl-icon-revised.jpg?compress=1&resize=400x300" 
             alt=""
             />
               

              <span>Account</span>
              <span>Help Center</span>
              <span>Sign out of Netflix</span>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;