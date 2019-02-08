import SagaTester from 'redux-saga-tester';
import MockAdapter from 'axios-mock-adapter';
import api from '../../../services/api';
import rootSaga from '../index';

import { Types as TodosTypes, Creators as TodosActions } from '../../ducks/todos';

const apiMock = new MockAdapter(api);

describe('Todo Sagas', () => {
  let sagaTester = null;
  beforeEach(() => {
    sagaTester = new SagaTester();
    sagaTester.run(rootSaga);
  });

  it('should be able to fetch todos from API', async () => {
    const todosFixure = [
      { id: 0, text: 'Lavar a louça' },
      { id: 1, text: 'Pythom' },
      { id: 2, text: 'React' },
    ];
    apiMock.onGet('todos').reply(200, todosFixure);
    sagaTester.dispatch(TodosActions.getTodosRequest());
    await sagaTester.waitFor(TodosTypes.GET_SUCCESS);
    expect(sagaTester.getLatestCalledAction()).toEqual(TodosActions.getTodosSuccess(todosFixure));
  });

  it('should fail if response is not ok', async () => {
    apiMock.onGet('todos').reply(400, {});
    sagaTester.dispatch(TodosActions.getTodosRequest());
    await sagaTester.waitFor(TodosTypes.GET_FAILURE);
    expect(sagaTester.getLatestCalledAction()).toEqual(
      TodosActions.getTodosFailure('Erro na requisição'),
    );
  });
});
