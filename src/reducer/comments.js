import { ADD_COMMENT, LOAD_ALL_COMMENTS, SUCCESS, START } from '../constants'
import { normalizedComments } from '../fixtures'
import { arrayToMap, ReducerState } from '../utils'
import { Record, Map } from 'immutable'

const CommentModel = Record({
    id: null,
    user: null,
    text: null,
    loading: false
})

const defaultComments = arrayToMap([], CommentModel)

const defaultState = new ReducerState({
    entities: defaultComments,
    loading: false,
    loaded: false
})

export default (commentsState = defaultState, action) => {
    const { type, payload, response, error, generatedId } = action

    switch (type) {
        case ADD_COMMENT:
            return commentsState.set(generatedId, {...payload.comment, id: generatedId})
    
        case LOAD_ALL_COMMENTS + START:
            return commentsState.set('loading', true)

        case LOAD_ALL_COMMENTS + SUCCESS:
            return commentsState
                .set('entities', arrayToMap(response.records, CommentModel))
                .set('loading', false)
                .set('loaded', true)
    }

    return commentsState
}