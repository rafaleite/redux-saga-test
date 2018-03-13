import { ACTIONS } from '../_actions/constants.action'

const INITIAL_STATE = {
    data: [],
    isFetching: false,
    error: false
}

const ip = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ACTIONS.IP.LOAD_DATA_REQUEST:
            return {
                isFetching: true,
                data: [],
                error: false
            }
        case ACTIONS.IP.LOAD_DATA_SUCCESS:
            return {
                isFetching: false,
                data: action.data,
                error: false
            }
        case ACTIONS.IP.LOAD_DATA_FAILURE:
            return {
                isFetching: false,
                data: [],
                error: true
            }
        case ACTIONS.IP.LOAD_DATA_FAKE:
            return {
                isFetching: true,
                data: [],
                error: false
            }
        default:
            return state
    }
}

export default ip
