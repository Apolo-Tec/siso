import { Reducer } from 'redux';
import { UserState, UserTypes } from './types';

const INITAL_STATE: UserState = {
    data: {
      CodUsuario: 0,
      NomeUsuario: "",
      CodGrugo: 0,
      PrimeiroAcesso: false,
      Erro: "",
    },
    error: false,
    loading: false,
};

const reducer: Reducer<UserState> = (state = INITAL_STATE, action) => {
    switch (action.type) {
        case UserTypes.LOAD_REQUEST:
            return { ...state, loading: true };
        case UserTypes.LOAD_SUCCESS:
            return { ...state, loading: false, error: false, data: action.payload.data };
        case UserTypes.LOAD_FAILURE:
            return { ...state, loading: false, error: true, data: {} };
        default: 
            return state;
    }
}

export default reducer;
