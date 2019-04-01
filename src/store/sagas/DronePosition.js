import { takeEvery, call, put, cancel, all } from "redux-saga/effects";
import API from "../api";
import * as actions from "../actions";

const delay = (ms) => new Promise(res => setTimeout(res, ms))

/*
  1. The weather service requires us to make a search by lat/lng to find its
  weather ID.
  2. We then use that weather ID to get the weather.

  This process is pretty well defined here with a saga.

  call invokes a method
  put dispatches an action
  takeEvery watches actions and executes a function

  Also -- the `*` in function is important; turns it into a "generator"

*/

function* getWatchDronePosition(action) {
  while(true){
    const { error, data } = yield call(
      API.findDronePosition
    );

    yield call(delay, 5000);

    if (error) {
      console.log({ error });
      yield put({ type: actions.API_ERROR, code: error.code });
      yield cancel();
      return;
    }

    yield put({ type: actions.RECEIVE_DRONE_POSITION, data: data });
  }
}

function* watchDronePosition() {
  yield all([
    takeEvery(actions.FETCH_DRONE_POSITION, getWatchDronePosition)
  ]);
}

export default [watchDronePosition];
