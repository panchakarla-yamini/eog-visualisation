import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import LinearProgress from "@material-ui/core/LinearProgress";
import Plot from 'react-plotly.js';
import { toast } from "react-toastify";

class DroneTimeSeries extends Component {
  componentDidMount() {
    this.props.onLoad();
  }
  render() {
    const {
      loading,
      name,
      positions
    } = this.props;

    if (loading) return <LinearProgress />;
    return (
      <Plot
          layout={{
              title: 'Sample Drone temperature',
              xaxis1: {
                type: 'date',
                tickFormat: '%H~%M'
              },
              width: 1200,
              height: 'auto'
            }}
          data={[
            {
              x: positions ? positions.map(pos => pos['timestamp']) : [],
              y: positions ? positions.map(pos => pos['metric']) : [],
              type: 'graph',
              mode: 'lines+points',
              marker: {color: 'darkblue'},
            }
          ]}
                />
    );
  }
}

const mapState = (state, ownProps) => {
  const {
    loading,
    name,
    data
  } = state.dronePositions;
  let positions = data['data'];

  return {
    loading,
    name,
    positions
  };
};

const mapDispatch = dispatch => ({
  onLoad: () => {
    toast.success(`Data Visualisation...`, {toastId: '1'});

    dispatch({
      type: actions.FETCH_DRONE_POSITION
    })
  }
});

export default connect(
  mapState,
  mapDispatch
)(DroneTimeSeries);
