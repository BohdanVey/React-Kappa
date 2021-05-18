import "../styles.css";
import Header from "../../modules/Global/Header";
import {Grid, Button, Box} from "@material-ui/core";
import ContentExpedition from "../../modules/Content/Expedition"

function Expedition() {


    return (
        <div>
            <Header/>
            <div className="content">
                <div className="header">Expedition</div>
                <ContentExpedition/>
            </div>
        </div>
    );
}

export default Expedition;
