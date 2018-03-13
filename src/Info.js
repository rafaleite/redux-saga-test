import React, { Component } from 'react'
import { loadDataRequest, loadDataFake } from './_actions/ip.action'
import { connect } from 'react-redux'

class Info extends Component { 
    render(){
        return (
            <div>
                <h1>IP INFO</h1>
                <button onClick={() => this.props.loadData()} > Teste </button>
                <button onClick={() => this.props.loadDataFake()} > Teste FAKE </button>
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
        loadData: () => dispatch(loadDataRequest()),
        loadDataFake: () => dispatch(loadDataFake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Info)
