import { FILTER_ARTICLES } from '../constants'

export default (filterState = [], action) => {
    const { type, payload } = action

    switch (type) {
        case FILTER_ARTICLES:
            return payload
    }

    return filterState
}