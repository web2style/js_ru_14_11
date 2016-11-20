import React  from 'react'
import Article from './Article'
import CommentList from './CommentList'

function ArticleList(props) {
    const { articles } = props

    const articleItems = articles.map(article => <li key = {article.id}>
        <Article article = {article} />
        {article.comments && <div>
            Комментарии:
            <CommentList comments={article.comments}/>
        </div>}
    </li>)

    return (
        <ul>
            {articleItems}
        </ul>
    )
}

export default ArticleList