import { combineReducers } from 'redux'
import articleReducer from './articles'
import filterReducer from './filter'
import counterReducer from './counter'

export default combineReducers({
    articles: articleReducer,
    count: counterReducer,
    filter: filterReducer,
})