import * as actions from "../actions";

const initialState = {
  loading: false,
  name: "",
  data: {}
};

const startLoading = (state, action) => {
  return { ...state, loading: true };
};

const droneDataReceived = (state, action) => {
  const { data } = action;

  return {
    ...state,
    loading: false,
    data: data
  }
}

const handlers = {
  [actions.FETCH_DRONE_POSITION]: startLoading,
  [actions.RECEIVE_DRONE_POSITION]: droneDataReceived
};

export default (state = initialState, action) => {
  const handler = handlers[action.type];
  if (typeof handler === "undefined") return state;
  return handler(state, action);
};
