import "../styles.css";
import Header from "../../modules/Global/Header";
// import {Button, Box, Grid} from "@material-ui/core";
import ContentExplore from "../../modules/Content/Explore"
function Explore() {
    return (
        <div>
            <Header/>
            <div className="content">
                <ContentExplore/>
            </div>

        </div>
    );
}

export default Explore;