import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import LinearProgress from "@material-ui/core/LinearProgress";
import MapContainer from './MapContainer';
import { toast } from "react-toastify";

class DronePosition extends Component {
  componentDidMount() {
    this.props.onLoad();
  }
  render() {
    const {
      loading,
      name,
      currentPosition
    } = this.props;
    if (loading) return <LinearProgress />;
    return (
      <MapContainer currentPosition={currentPosition}/>
    );
  }
}

const mapState = (state, ownProps) => {
  const {
    loading,
    name,
    data
  } = state.dronePositions;

  let positions = data['data'] || [];
  let currentPosition = positions[positions.length - 1] || {};

  return {
    loading,
    name,
    currentPosition
  };
};

const mapDispatch = dispatch => ({
  onLoad: () => {
    toast.success(`Drone position started...`, {toastId: '1'});

    dispatch({
      type: actions.FETCH_DRONE_POSITION
    })
  }
});

export default connect(
  mapState,
  mapDispatch
)(DronePosition);
