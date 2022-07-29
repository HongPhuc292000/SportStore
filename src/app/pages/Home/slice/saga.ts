import { call, put, takeLatest } from 'redux-saga/effects';
import productApis from 'services/api/productApis';
import { Pageable, ProductI } from 'types';
import { homeManagementAction as actions } from '.';

function* getProducts() {
  try {
    const result: Pageable<ProductI> = yield call(productApis.getListProducts);
    yield put(actions.getProductssSuccess(result));
  } catch (error: any) {
    console.log('🚀 ~ file: function*listProducts', error);
  }
}

export function* homeManagementSaga() {
  yield takeLatest(actions.getProducts.type, getProducts);
}
