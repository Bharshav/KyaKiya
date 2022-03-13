import logo from "./logo.svg";
import "./App.css";
import {Tabs,Tab} from 'react-bootstrap'

//local imports
import Today from "./components/Today/Today";
import Modify from "./components/Modify/Modify";
import View from "./components/View/View";
import { useState } from "react";

function App() {
  const [key, setKey] = useState('today')
  return (
    <div className="App">
      <Tabs
        defaultActiveKey={key}
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="today" title="Today" defaultActiveKey>
          <Today/>
        </Tab>
        <Tab eventKey="modify" title="Modify">
          <Modify/>
        </Tab>
        <Tab eventKey="view" title="View">
          <View/>
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
