import "./style.css";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import { useState } from "react";

export default function CardFeature ({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  
 
    return (
    <div
     
      className="cardFeature"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://news.newonnetflix.info/wp-content/uploads/2021/10/love-hard-poster.jpeg"
        alt=""
      
       />
      
        <div className="movieInfo">
            
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>


            <div className="movieInfoTop">
              <span>1 hour 45 mins</span>
              <span className="limit">+17</span>
              <span>2021</span>
            </div>
            <div className="desc">
            An LA girl, unlucky in love, falls for an East Coast guy on a dating app and decides 
            to surprise him for the holidays, only to discover that she's been catfished. 
            This lighthearted romantic comedy chronicles her attempt to reel in love.
            </div>
        
          </div>
        
      
    </div>
  );
}