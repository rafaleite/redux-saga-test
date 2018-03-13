import { createStore, applyMiddleware } from 'redux'
import { Reducers } from '../_reducers'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import index from '../_sagas'

const sagaMiddleWare = createSagaMiddleware()

const Store = createStore(
    Reducers,
    applyMiddleware(sagaMiddleWare, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

sagaMiddleWare.run(index)

export default Store
