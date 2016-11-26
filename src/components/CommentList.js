import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array.isRequired,
        //from toggleOpen decorator
        isOpen: PropTypes.bool.isRequired,
        toggleOpen: PropTypes.func.isRequired
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
                {this.getList()}
            </div>
        )
    }


    getButton() {
        const { comments, isOpen, toggleOpen } = this.props
        if ( !comments.length) return <span>No comments yet</span>
        return <a href="#" onClick = {toggleOpen}>{isOpen ? 'hide' : 'show'} comments</a>
    }

    getList() {
        const { comments, isOpen } = this.props
        if (!isOpen || !comments.length) return null
        const commentItems = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
        return (
            <div>
                <h3>Добавить комментарий</h3>
                <form>
                    <div>
                        <label htmlFor='name'>Имя</label><br />
                        <input id='name' />
                    </div>
                    <div>
                        <label htmlFor='comment'>Комментарий</label><br />
                        <textarea id='comment' rows='5'></textarea>
                    </div>
                </form>
                <ul>{commentItems}</ul>
            </div>
        )
    }
}

export default toggleOpen(CommentList)