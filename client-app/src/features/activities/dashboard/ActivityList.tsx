import React from "react";
import { Button, Item, Segment, Label } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
  activities: Activity[];
  selectActivity: (id: string) => void;
}

const ActivityList = ({ activities, selectActivity }: Props) => {
  return (
    <Segment>
      <Item.Group>
        {activities.map((activity) => (
          <Item key={activity.id}>
            <Item.Content>
              <Item.Header as="a">{activity.title}</Item.Header>
              <Item.Meta>{activity.date.toString()}</Item.Meta>
              <Item.Description>
                <div>{activity.description}</div>
                <div>
                  {activity.city}, {activity.venue}
                </div>
              </Item.Description>
              <Item.Extra>
                <Button
                  floated="right"
                  content="View"
                  color="blue"
                  onClick={() => selectActivity(activity.id)}
                />
                <Label basic content={activity.category} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
};

export default ActivityList;
