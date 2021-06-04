import logo from "../../logo.svg";
import "../styles.css";
import { Button, Box } from "@material-ui/core";
import background from "../../media/mars.jpg";
import Header from "../../modules/Global/Header";

function Main() {
  return (
    <div>
      <Header />

      <div
        className="main-content"
        style={{
          backgroundImage: `url(${"mars.jpg"})`,
        }}
      >
        <Box className="main-icon main-explore" color="grey">
          <p className="main-text">Explore</p>
        </Box>
        <Box className="main-icon main-search" color="grey">
          <p className="main-text">Expeditions</p>
        </Box>
        <Box className="main-icon main-profile" color="grey">
          <p className="main-text">Profile</p>
        </Box>
      </div>
    </div>
  );
}

export default Main;
