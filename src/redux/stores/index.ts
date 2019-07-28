import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers'
import rootSaga  from '../saga';
import { composeWithDevTools } from 'redux-devtools-extension';
const sagaMiddleware = createSagaMiddleware();

export default () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
      reducer,
      compose(
        composeWithDevTools(
          applyMiddleware(sagaMiddleware)
        )
      )
      
    );
    sagaMiddleware.run(rootSaga);
    return store;
  };