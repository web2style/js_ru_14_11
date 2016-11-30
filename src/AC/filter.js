import { FILTER_ARTICLES } from '../constants'

export function filterArticles(filter) {
    return {
        type: FILTER_ARTICLES,
        payload: filter
    }
}