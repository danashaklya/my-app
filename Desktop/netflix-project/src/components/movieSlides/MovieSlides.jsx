import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { useRef, useState } from "react";
import CardFeature from "../cardFeature/CardFeature";
import "./style.css";

    export default function MovieSlides() {

        const [isMoved, setIsMoved] = useState(false);
        const [slideNumber, setSlideNumber] = useState(0);
      
        const listRef = useRef();
      
        const handleClick = (direction) => {
          setIsMoved(true);
          let distance = listRef.current.getBoundingClientRect().x - 50;
          if (direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
          }
          if (direction === "right" && slideNumber < 5) {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;

          }
        };

//adding the back and forward slider 
    return (
        <div className="movieSlides">
           <span className="Title">Popular on Netflix</span>
          

            <div className="wrapper">
                <ArrowBackIos className="sliderArrow left " onClick= {()=>handleClick("left")}
                style={{ display: !isMoved && "none" }}
                />
                <div className="container" ref={listRef}>
                    <CardFeature index={0}/> 
                    <CardFeature index={1}/>
                    <CardFeature index={2}/>
                    <CardFeature index={3}/>
                    <CardFeature index={4}/>
                    <CardFeature index={5}/>
                    <CardFeature index={6}/>
                    <CardFeature index={7}/>
                </div>
                <ArrowForwardIos className="sliderArrow right" onClick= {()=>handleClick("right")}/>

            </div>
        </div>
    );
}