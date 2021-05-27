import React, {useState} from "react"
import {Grid} from "@material-ui/core"
import ExpeditionCard from "../ExpeditionCard"
import ExpeditionForm from "../../Add/components/ExpeditionForm"

import { useDispatch, useSelector } from "react-redux";
import { addExpeditionAction } from "../action/actionTypes";

const ContentExpedition = () => {
    const items = useSelector((state) => state.expeditions);


    return (
        <div>
            <Grid container spacing={1}>
                {items.map((item) => <ExpeditionCard title={item.title} date={item.date}/>)}
            </Grid>
            <div>
            <ExpeditionForm />
            </div>
        </div>
    )
}

export default ContentExpedition;
