import { all } from 'redux-saga/effects';
import { homeManagementSaga } from './pages/Home/slice/saga';

export default function* rootSaga() {
  yield all([homeManagementSaga()]);
}
