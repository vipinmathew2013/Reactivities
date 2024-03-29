import React from "react";
import { Button, Item, Segment } from "semantic-ui-react";
import { Activity } from "../../../models/activity";

interface Props {
    activities:Activity[];
    selectActivity:(id:string)=>void;
    cancelSelectActivity:()=>void;
    deleteActivity:(id:string)=>void;
}
export default function Activitylist({activities,selectActivity,deleteActivity}:Props){

    return (
        <Segment>
            <Item.Group divided>
{activities.map(activity => 
    <Item key={activity.id}>
        <Item.Content>
            <Item.Header as='a'>{activity.title}</Item.Header>
            <Item.Meta>{activity.date}</Item.Meta>
            <Item.Description>
             <div>{activity.description}</div>
             <div>{activity.city},{activity.venue}</div>            
            </Item.Description>
            <Item.Extra>
                <Button onClick={()=>selectActivity(activity.id)} floated='right' content='View' color='blue'></Button>
                <Button onClick={()=>deleteActivity(activity.id)} floated='right' content='Delete' color='red'></Button>
            </Item.Extra>
        </Item.Content>

    </Item>
    )}
            </Item.Group>
        </Segment>

    )
}