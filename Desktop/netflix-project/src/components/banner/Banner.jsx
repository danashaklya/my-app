
import { PlayArrow, InfoOutlined } from "@material-ui/icons";

import "./style.css";

export default function Banner() {
    return (
       
        <div className="banner">
        
         <img
            src="https://raw.githubusercontent.com/AhmedTohamy01/React-Netflix-Clone/master/public/images/films/thriller/joker/large.jpg  " 
            alt="" />

        <div className="info">
        <img
            src=" https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUDz_C7I1E64C9wfcxvePidHXvK7krJSH1dNlvCNxFNswN_klcdbj0AvBdhp4SRIyxo-XLu61vGEgnauQ5OfMhQm3N9MMvrvJEOY.png?r=e3b  " 
            alt="" />
        

        <span className="header">
        Joker
        </span>

        <span className="date">
        2019 | R | 2h 1m | Dramas
        </span>

        <span className="description">
        In 1981 Gotham City, a struggling, mentally ill comic battles to be 
        seen. His life takes a dark, gut-wrenching turn after he lashes back 
        at attackers.
        </span>

     
         <div className="buttons">
            <button className="play">
                <PlayArrow/>
                <span>Play</span>
            </button>
            <button className="more">
                <InfoOutlined/>
            <span>Info</span>
            </button>
        </div>


        </div>
        </div>
    )
}