import React, { PropTypes, Component }  from 'react'
import Article from './Article'
import openArticle from '../decorators/openArticle'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        openArticle: PropTypes.func.isRequired,
        openArticleId: PropTypes.string
    }
    render () {
        const {articles, openArticle, openArticleId} = this.props;
        const articleItems = articles.map(article => (
            <li key = {article.id}>
                <Article
                    article = {article}
                    isOpen = {article.id == openArticleId}
                    toggleOpen = {openArticle(article.id)}
                />
            </li>
        ))

        return (
            <ul>
                {articleItems}
            </ul>
        )
    }
}

export default openArticle(ArticleList)