import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../AC/comments'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import NewCommentForm from './NewCommentForm'
import { loadAllComments } from '../AC/comments'
import Loader from './Loader'

class CommentList extends Component {
    static propTypes = {
        //from connect
        comments: PropTypes.object.isRequired,
        //from toggleOpen decorator
        isOpen: PropTypes.bool.isRequired,
        toggleOpen: PropTypes.func.isRequired
    }

    static defaultProps = {
        comments: []
    }

    render() {
        const { article, addComment, comments, isOpen, loading, loaded } = this.props
        const commentForm = <NewCommentForm articleId={article.id} addComment={addComment} />
        const commentItems = comments.map(comment => { return <li key={comment.get('id')}><Comment comment={comment} /></li> })
        return (
            <div>
                {
                    !loaded || (loaded && comments.size) ?
                        <a href="#" onClick={this.toggleOpen}>{isOpen ? 'hide' : 'show'} comments</a> :
                        null
                }
                {loaded && !comments.size && <div>No comments yet</div>}
                {loading && <Loader />}
                {isOpen && <ul>{commentItems}</ul>}
                <div>{commentForm}</div>
            </div>
        )
    }

    toggleOpen = () => {
        if (!this.props.comments.size) this.props.loadAllComments()
        this.props.toggleOpen()
    }
}

export default connect((state, props) => ({
    comments: state.comments.entities.filter(comment => props.article.get('comments').some(value => value === comment.get('id'))),
    loading: state.comments.loading,
    loaded: state.comments.loaded
}), { addComment, loadAllComments })(toggleOpen(CommentList))