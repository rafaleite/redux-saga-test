import {ACTIONS} from './constants.action'
export const loadDataRequest = () => {
    return {
        type: ACTIONS.IP.LOAD_DATA_REQUEST
    }
}

export const loadDataSuccess = (data) => {
    return {
        type: ACTIONS.IP.LOAD_DATA_SUCCESS,
        data
    }
}

export const loadDataFailure = () => {
    return {
        type: ACTIONS.IP.LOAD_DATA_FAILURE
    }
}

export const loadDataFake = () => {
    return {
        type: ACTIONS.IP.LOAD_DATA_FAKE
    }
}