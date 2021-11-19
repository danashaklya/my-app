import Navbar from "../components/navbar/Navbar";
import Present from "../components/banner/Banner";
import List from "../components/movieSlides/MovieSlides";

import "./style.css"

const Home = ({type}) => {
    return (
        <div className="home">
          <Navbar/>
          <Present type={type}/>
          <List/>
          <List/>
          <List/>
          <List/>
        
        </div>
    );
};

export default Home;