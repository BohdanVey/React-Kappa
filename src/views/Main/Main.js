// import logo from "../../logo.svg";
import "../styles.css";
import { Box} from "@material-ui/core";
// import background from "../../media/mars.jpg";
import Header from "../../modules/Global/Header";
import {
    Link,
  } from "react-router-dom";
import { useSelector } from "react-redux";

function Main() {
    const logInInfo = useSelector((state) => state.currUser)
    
    console.log("Main logInInfo fire")
    console.log(logInInfo)
    console.log("Main logInInfo fire")

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
                <Link to={"/user/:" + logInInfo.usedId}>
                    <Box className="main-icon main-profile" color="grey">
                        <p className="main-text">Profile</p>
                    </Box>
                </Link>
            </div>
        </div>
    );
}

export default Main;