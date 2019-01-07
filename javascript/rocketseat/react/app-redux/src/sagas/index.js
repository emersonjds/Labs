import { call, put } from "redux-saga";

function fetchUSer(action) {
  try {
    const user = yield call(Api.fetchUSer, action.payload.userId);
    yield put({
      type:'USER_FETCH_SUCCEEDED',
      user: user
    })
  } catch (e) {
    yield put({
      type: 'USER_FETCH_SUCCEEDED',
      user: user
    })
  }
}
