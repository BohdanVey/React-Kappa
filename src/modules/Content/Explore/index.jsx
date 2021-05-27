import React, {useState} from "react"
import {Grid} from "@material-ui/core"
import ExploreCard from "../ExploreCard"
// import Button from "@material-ui/core/Button";
import ExploreForm from "../../Add/components/ExploreForm"

const initState = [
    {
        id: 1,
        'title': '1',

    },
    {
        id: 2,
        'title': '2',

    },
    {
        id: 3,
        'title': '3',

    },
    {
        id: 4,
        'title': '4',

    },
    {
        id: 5,
        'title': '5',

    }
];


const ContentExplore = () => {
    const [items, updateItems] = useState(initState);

    const addExplore = (props) => {
        updateItems([
            ...items,
            {
                id: items.length + 1,
                title: props.title,
            },
        ]);
        console.log("test")
    };
    return (
        <div>
            <Grid container spacing={1}>
                {items.map((item) => <ExploreCard title={item.title} date={item.date}/>)}
            </Grid>
            <div>
                <ExploreForm addExplore={addExplore}/>
            </div>
        </div>
    )
}

export default ContentExplore;
