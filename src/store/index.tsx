import Reactotron from 'reactotron-react-native'
import './../../ReactotronConfig';
import { createStore, applyMiddleware, Store } from 'redux';
import  createSagaMiddleware from 'redux-saga';
import { RepositoriesState } from './ducks/repositories/types';
import { UserState } from './ducks/user/types';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

const sagaMonitor = Reactotron.createSagaMonitor();

export interface ApplicationState {
    repositories: RepositoriesState,
    user: UserState
}

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;   