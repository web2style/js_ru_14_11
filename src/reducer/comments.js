import { ADD_COMMENT } from '../constants'
import { normalizedComments } from '../fixtures'
import { Map } from 'immutable'

const defaultComments = normalizedComments.reduce((acc, comment) => {
    return acc.set(comment.id, comment)
}, new Map({}))

export default (comments = defaultComments, action) => {
    const { type, payload, response, error } = action

    switch (type) {
        case ADD_COMMENT:
            return comments.set(payload.commentId, {
                id: payload.commentId,
                user: payload.user,
                text: payload.text
            })
    }

    return comments
}