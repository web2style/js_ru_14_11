import { ADD_COMMENT } from '../constants'

export function addComment(comment, articleId, commentId) {
    return {
        type: ADD_COMMENT,
        payload: {
            articleId,
            commentId,
            ...comment
        }
    }
}