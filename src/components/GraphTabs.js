import React, { Component } from "react";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import DronePosition from "./DronePosition";
import DroneTimeSeries from "./DroneTimeSeries";

class GraphTabs extends Component {
  constructor(props){
    super(props);

    this.state = {
      value: 0
    }
  }

  handleChange = (event, value) => {
      this.setState({ value });
    };

  render() {
    const { value } = this.state;

    function TabContainer(props) {
      return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
          {props.children}
        </Typography>
      );
    }

    return(
      <div>
        <AppBar position="static">
        <Tabs value={value} onChange={this.handleChange}>
          <Tab label="Map Visualisation" />
          <Tab label="Chart Visualisation" />
        </Tabs>
      </AppBar>
        {value === 0 && <TabContainer>
          <DronePosition />
          </TabContainer>
        }
        {value === 1 && <TabContainer>
          <DroneTimeSeries />
        </TabContainer>
      }
      </div>
  )
  }
}


export default GraphTabs;
