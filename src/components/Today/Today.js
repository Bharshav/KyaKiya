import React from "react";
import { Card, Button } from "react-bootstrap";

//local imports
import './Today.css'
import data from '../../testdata/test.json'
import {ReactComponent as Tasksvg} from '../../assets/task.svg'

function Today() {
  return (
    <div className="todayview">
      
        {data.tasks.map((task)=>
          <Card style={{ width: '18rem', padding:'1rem' }}>
            <Tasksvg  className="tasksvg"/>

              
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Mark as done</Button>
          </Card.Body>
        </Card>
        
        )}
        
      
    </div>
  );
}

export default Today;
