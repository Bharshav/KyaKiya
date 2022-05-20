import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'

//local imports
import './Today.css'
import data from '../../testdata/test.json'
import { ReactComponent as Tasksvg } from '../../assets/task.svg'

function Today(props) {
  const [tasks, setTasks] = useState([0, 1, 2])
  const addTask = () => {
    setTasks([...tasks, tasks.length])
  }
  return (
    <div className='todayview'>
      {tasks.map((task) => (
        <Card style={{ width: '18rem', padding: '1rem' }}>
          <Tasksvg className='tasksvg' />

          <Card.Body>
            <Card.Title>Card Title</Card.Title>

            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div className='actionsontoday'>
              <Button variant='primary' onClick={addTask}>
                Mark as done
              </Button>
              <Button variant='secondary'>
                <i class='bi bi-pen editontoday' />
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  )
}

export default Today
