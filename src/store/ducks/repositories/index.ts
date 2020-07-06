import { Reducer } from 'redux';
import { RepositoriesState, RepositoriesTypes } from './types';

const INITAL_STATE: RepositoriesState = {
    data: [{
        id: 1,
        name: 'Rocketseat'
    }],
    error: false,
    loading: false,
};

const reducer: Reducer<RepositoriesState> = (state = INITAL_STATE, action) => {
    switch (action.type) {
        case RepositoriesTypes.LOAD_REQUEST:
            return { ...state, loading: true };
        case RepositoriesTypes.LOAD_SUCCESS:
            return { ...state, loading: false, error: false, data: action.payload.data };
        case RepositoriesTypes.LOAD_FAILURE:
            return { ...state, loading: false, error: true, data: [] };
        default: 
            return state;
    }
}

export default reducer;
