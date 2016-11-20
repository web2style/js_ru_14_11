import React, { Component } from 'react'
import Comment from './Comment'

class Article extends Component {

    constructor() {
        super()
        this.state = {
            isOpen: false
        }
    }

    render() {
        const { comments } = this.props
        const toggle = this.state.isOpen ? <p>Скрыть</p> : <p>Показать</p>
        return (
            <div>
                <div onClick={this.handleClick}>{toggle}</div>
                <ul style={{'display': this.state.isOpen ? 'block' : 'none'}}>
                    {/*советую не писать много кода внутри JSX, быстро становится нечитабельным. вынеси в переменную*/}
                    {comments.map(comment => <li key={comment.id}>
                        <Comment comment={comment} />
                    </li>)}
                </ul>
            </div>
        )
    }

    handleClick = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article
