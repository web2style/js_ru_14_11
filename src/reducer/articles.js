import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import immutable, { Map } from 'immutable'

const defaultArticles = normalizedArticles.reduce((acc, article) => {
    return acc.set(article.id, immutable.fromJS(article))
}, new Map({}))

export default (articlesState = defaultArticles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articlesState.filter(article => article.get('id') != payload.articleId)
        case ADD_COMMENT:
            return articlesState.updateIn([payload.articleId, 'comments'], comments => comments.push(payload.commentId))
    }

    return articlesState
}