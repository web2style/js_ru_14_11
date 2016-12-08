import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import NewCommentForm from './NewCommentForm'
import { addComment } from '../AC/comments'

class CommentList extends Component {
    static propTypes = {
        commentIds: PropTypes.object.isRequired,
        //from connect
        comments: PropTypes.object.isRequired,
        //from toggleOpen decorator
        isOpen: PropTypes.bool.isRequired,
        toggleOpen: PropTypes.func.isRequired,
        addComment: PropTypes.func.isRequired,
        articleId: PropTypes.string.isRequired
    }

    static defaultProps = {
        comments: []
    }


    componentWillReceiveProps() {
        //console.log('---', 'CL receiving props')
    }

    componentWillUpdate() {
        //console.log('---', 'CL will update')
    }


    render() {
        return (
            <div>
                {this.getButton()}
                {this.getBody()}
            </div>
        )
    }


    getButton() {
        const { comments, isOpen, toggleOpen } = this.props
        if ( !comments.size) return <span>No comments yet</span>
        return <a href="#" onClick = {toggleOpen}>{isOpen ? 'hide' : 'show'} comments</a>
    }

    getBody() {
        const { comments, isOpen, addComment } = this.props
        const commentForm = <NewCommentForm onAddComment={(comment) => { addComment(comment, this.props.articleId, comments.size) } } />
        if (!isOpen || !comments.size) return <div>{commentForm}</div>
        const commentItems = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
        return <div><ul>{commentItems}</ul>{commentForm}</div>
    }
}

export default connect((state, props) => ({
    comments: props.commentIds.map(id => state.comments.get(id))
}), {
    addComment
})(toggleOpen(CommentList))