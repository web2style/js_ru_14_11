import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Main from './Main'

class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <Main />
            </Provider>
        )
    }
}

export default Root