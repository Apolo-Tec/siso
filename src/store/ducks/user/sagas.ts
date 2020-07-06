import { call, put } from 'redux-saga/effects';
import { siso, repositories } from '../../../services/api';

import { loadSuccess, loadFailure } from './actions';

export function* loadUser() {
    try {
        console.log('loadUser');
        const response = yield call(siso.get, "Usuario/Autenticar?user=rodolfo.chaves&psw=123"); 
        console.log('response', response);  
        yield put(loadSuccess(response.data));
    } catch (err) {
        yield put(loadFailure());
    }
}
