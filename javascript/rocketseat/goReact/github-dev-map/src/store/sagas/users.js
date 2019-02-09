import { call, put, select } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import api from '../../services/api';

import { Creators as UserActions } from '../ducks/users';
import { Creators as ModalActions } from '../ducks/modal';

export function* addUser(action) {
  try {
    const { data } = yield call(api.get, `/users/${action.payload.user}`);
    const isDuplicated = yield select(state => state.users.data.find(user => user.id === data.id));
    if (isDuplicated) {
      yield put(UserActions.addUserFailure('Usuario duplicado'));
      toast.warn('Usuario duplicado', {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      const userData = {
        id: data.id,
        name: data.name,
        login: data.login,
        avatar: data.avatar_url,
        cordinates: action.payload.cordinates,
      };

      yield put(UserActions.addUserSuccess(userData));
      toast.success('Usuario adicionado com sucesso', {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  } catch (err) {
    yield put(UserActions.addUserFailure('Erro ao adicionar'));
    toast.error('Erro ao adicionar usuario', {
      position: toast.POSITION.TOP_RIGHT,
    });
  } finally {
    yield put(ModalActions.hideModal());
  }
}
