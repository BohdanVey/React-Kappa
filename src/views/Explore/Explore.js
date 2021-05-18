import "../styles.css";
import Header from "../../modules/Global/Header";
import {Button, Box, Grid} from "@material-ui/core";
import ContentExplore from "../../modules/Content/Explore"
function Explore() {
    return (
        <div>
            <Header/>
            <div className="content">
                <div className="header">Explore</div>

                    <ContentExplore/>
            </div>

        </div>
    );
}

export default Explore;
