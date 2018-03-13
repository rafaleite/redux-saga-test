import { createStore, applyMiddleware } from 'redux'
import { Reducers } from '../_reducers'
import createSagaMiddleware from 'redux-saga'
import index from '../_sagas'

const sagaMiddleWare = createSagaMiddleware()

const Store = createStore(
    Reducers,
    applyMiddleware(sagaMiddleWare)
)

sagaMiddleWare.run(index)

export default Store
