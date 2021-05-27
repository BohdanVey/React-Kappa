// import {makeStyles} from "@material-ui/core/styles";
import {
    Grid
} from "@material-ui/core";

import PropTypes from "prop-types";

const ExpeditionCard = ({title, date}) => {
    return (
        <Grid item xs={12}>
            <div className="sub-content" href="/">
                <a>
                    <p className="search-text">{title}</p>
                    <p className="right-data">{date}</p>
                </a>
            </div>
        </Grid>
    );
};

ExpeditionCard.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
};

export default ExpeditionCard;