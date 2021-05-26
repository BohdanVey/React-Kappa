import {
    Grid
} from "@material-ui/core";

import PropTypes from "prop-types";

const ExploreCard = ({title, date}) => {
    return (
        <Grid item xs={12}>
            <div className="sub-content" href="/">
                <a>
                    <p className="search-text">{title}</p>
                </a>
            </div>
        </Grid>
    );
};

ExploreCard.propTypes = {
    title: PropTypes.string.isRequired,
};

export default ExploreCard;