import { action } from 'typesafe-actions';
import { UserTypes, User } from './types';

export const loadRequest = (user) => action(UserTypes.LOAD_REQUEST, user);
export const loadSuccess = (data: User) => action(UserTypes.LOAD_SUCCESS, { data });
export const loadFailure = () => action(UserTypes.LOAD_FAILURE);
