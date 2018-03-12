import React, { Component } from 'react'
import { loadDataRequest } from './_actions/ip.action'
import { connect } from 'react-redux'

class Info extends Component { 
    render(){
        return (
            <div>
                <h1>IP INFO</h1>
                <button onClick={() => this.props.loadData()} > Teste </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.ip.isFetching,
        data: state.ip.data,
        error: state.ip.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadData: () => dispatch(loadDataRequest())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Info)
