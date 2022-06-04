import React from 'react';
import { Grid, List } from 'semantic-ui-react';
import { Activity } from '../models/activity';
import Activitylist from './Activities/dashboard/ActivityList';
import ActivityDetails from './Activities/details/ActivityDetails';
import ActivityForm from './Activities/form/ActivityForm';



interface Props {
    activities:Activity[];
    selectedActivity:Activity| undefined;
    selectActivity:(id:string)=>void;
    cancelSelectActivity:()=>void;
    editMode:boolean;
    openForm:(id:string) =>void;
    closeForm:()=> void;
    createOrEdit :(activity:Activity)=>void;
    deleteActivity:(id:string)=>void;
}

export default function ActivityDashboard({activities,selectedActivity,selectActivity,cancelSelectActivity,openForm,closeForm,editMode,createOrEdit,deleteActivity}:Props){
    return (
<Grid>
    <Grid.Column width='10'>
    <Activitylist activities={activities} selectActivity={selectActivity} cancelSelectActivity={cancelSelectActivity} deleteActivity={deleteActivity}/>
    </Grid.Column>
    <Grid.Column width='6'>
        {selectedActivity && !editMode &&
   <ActivityDetails 
   activity={selectedActivity} 
   cancelSelectActivity={cancelSelectActivity}
   openForm={openForm}
   ></ActivityDetails>
   
   }
   {editMode && 
   <ActivityForm closeForm={closeForm} activity={selectedActivity} createOrEdit={createOrEdit} ></ActivityForm>}
    </Grid.Column>
</Grid>

    )
}