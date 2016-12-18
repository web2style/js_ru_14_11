import { combineReducers } from 'redux'
import articleReducer from './articles'
import comments from './comments'
import counterReducer from './counter'
import filters from './filters'
import intl from './intl'

export default combineReducers({
    articles: articleReducer,
    count: counterReducer,
    filters, comments, intl
})