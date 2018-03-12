import { createStore, applyMiddleware } from 'redux'
import { Reducers } from '../_reducers'
import createSagaMiddleware from 'redux-saga'
import { put, takeEvery } from 'redux-saga/effects'
import { loadDataSuccess } from '../_actions/ip.action'
import axios from 'axios'

import {ACTIONS} from '../_actions/constants.action'

const sagaMiddleWare = createSagaMiddleware()

function *getIp() {
    const dados = yield axios.get('http://httpbin.org/ip')
    yield put(loadDataSuccess(dados.data.origin))
}

function *index(){
    console.log("hello from saga")
    yield takeEvery(ACTIONS.IP.LOAD_DATA_REQUEST, getIp)
    
}

const Store = createStore(
    Reducers,
    applyMiddleware(sagaMiddleWare)
)

sagaMiddleWare.run(index)


export default Store