export enum UserTypes {
  LOAD_REQUEST = '@user/LOAD_REQUEST',
  LOAD_SUCCESS = '@user/LOAD_SUCCESS',
  LOAD_FAILURE = '@user/LOAD_SUCCESS'
};

export interface User {
  CodUsuario: number;
  NomeUsuario: string;
  CodGrugo: number;
  PrimeiroAcesso: boolean;
  Erro: any;
}


export interface UserState {
  readonly data: User
  readonly loading: boolean
  readonly error: boolean
}