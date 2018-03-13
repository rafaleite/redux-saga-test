import { takeEvery } from 'redux-saga/effects'
import { ACTIONS } from '../_actions/constants.action'
import { getIp, loadFake } from './ip.sagas'

function *index(){
    console.log("hello from saga")
    yield takeEvery(ACTIONS.IP.LOAD_DATA_REQUEST, getIp)
    yield takeEvery(ACTIONS.IP.LOAD_DATA_FAKE, loadFake)
    
}

export default index