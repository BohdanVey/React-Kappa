// import logo from "../../logo.svg";
import "../styles.css";
import { Box} from "@material-ui/core";
// import background from "../../media/mars.jpg";
import Header from "../../modules/Global/Header";
import {
    Link,
  } from "react-router-dom";

function Main() {
    return (
        <div>
            <Header/>

            <div
                className="main-content"
                style={{
                    backgroundImage: `url(${"mars.jpg"})`,
                }}
            >
                
                <Link to='/explore'>
                    <Box className="main-icon main-explore" color="grey">
                        <p className="main-text">Explore</p>
                    </Box>
                </Link>
                <Link to='/expedition'>
                    <Box className="main-icon main-search" color="grey">
                        <p className="main-text">Expeditions</p>
                    </Box>
                </Link>
                <Link to='/user'>
                    <Box className="main-icon main-profile" color="grey">
                        <p className="main-text">Profile</p>
                    </Box>
                </Link>
            </div>
        </div>
    );
}

export default Main;