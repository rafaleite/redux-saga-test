import { put } from 'redux-saga/effects'
import { loadDataSuccess } from '../_actions/ip.action'
import axios from 'axios'

function *getIp() {
    const dados = yield axios.get('http://httpbin.org/ip')
    yield put(loadDataSuccess(dados.data.origin))
}

function *loadFake() {
    const dados = 'AQUI É ONDA PAPA!'
    yield put(loadDataSuccess(dados))
}

export {getIp, loadFake} 