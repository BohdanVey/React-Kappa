import React, {useState} from "react"
import {Grid} from "@material-ui/core"
import ExpeditionCard from "../ExpeditionCard"
import ExpeditionForm from "../../Add/components/ExpeditionForm"
import Button from "@material-ui/core/Button";

const initState = [
    {
        id: 1,
        'title': '1',
        'date': '10.12.2017'

    },
    {
        id: 2,
        'title': '2',
        'date': '11.12.2017'

    },
    {
        id: 3,
        'title': '3',
        'date': '12.12.2017'

    },
    {
        id: 4,
        'title': '4',
        'date': '13.12.2017'

    },
    {
        id: 5,
        'title': '5',
        'date': '14.12.2017'

    }
];


const ContentExpedition = () => {
    const [items, updateItems] = useState(initState);

    const addExpedition = (props) => {
        updateItems([
            ...items,
            {
                id: items.length + 1,
                title: props.title,
                date: props.date,
            },
        ]);
        console.log("test")
    };
    return (
        <div>
            <Grid container spacing={1}>
                {items.map((item) => <ExpeditionCard title={item.title} date={item.date}/>)}
            </Grid>
            <div>
            <ExpeditionForm addExpedition={addExpedition}/>
            </div>
        </div>
    )
}

export default ContentExpedition;
