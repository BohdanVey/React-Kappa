import React, {useState} from "react"
import {Grid} from "@material-ui/core"
import ExploreCard from "../ExploreCard"
// import Button from "@material-ui/core/Button";
import ExploreForm from "../../Add/components/ExploreForm"

import { useDispatch, useSelector } from "react-redux";
import { addDiscoveryAction } from "../action/actionTypes";

const ContentExplore = () => {
    const items = useSelector((state) => state.discoveries);

    const dispatch = useDispatch();

    const addExpedition = (props) => {
        dispatch({type: addDiscoveryAction, payload: props}) 
    };

    return (
        <div>
            <Grid container spacing={1}>
                {items.map((item) => <ExploreCard title={item.title} date={item.date}/>)}
            </Grid>
            <div>
                <ExploreForm />
            </div>
        </div>
    )
}

export default ContentExplore;
