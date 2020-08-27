import { call, put } from 'redux-saga/effects';
import { siso, repositories } from '../../../services/api';

import { loadSuccess, loadFailure } from './actions';

export function* loadUser({ payload }) {
    try {
        const response = yield call(siso.get, `Usuario/Autenticar?user=${payload.user}&psw=${payload.psw}`); 
        console.log('response', response);  
        yield put(loadSuccess(response.data));
    } catch (err) {
        yield put(loadFailure());
    }
}
