import { applyMiddleware, createStore } from 'redux'
import reducer from '../reducer'
import createLogger from 'redux-logger'

const logger = createLogger()

const store = createStore(reducer, applyMiddleware(logger))

window.store = store

export default store