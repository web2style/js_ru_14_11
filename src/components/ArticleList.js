import React, { Component, PropTypes }  from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'
import { connect } from 'react-redux'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        filter: PropTypes.array,
        //from accordion decorator
        isOpen: PropTypes.func.isRequired,
        toggleOpenItem: PropTypes.func.isRequired
    }

    componentWillMount() {
        console.log('---', 'mounting')
    }

    componentDidMount() {
        console.log('---', 'mounted', this.containerRef)
        console.log('---', this.refs)
    }

    componentWillReceiveProps(nexProps) {
        //console.log('isEqual', Object.keys(nexProps).every(key => nexProps[key] == this.props[key]))
        //console.log('---', 'AL receiving props')
    }

    componentWillUpdate() {
        //console.log('---', 'AL will update')
    }

    getContainerRef = ref => {
        this.containerRef = ref
    }


    render() {
        const { articles, filter, isOpen, toggleOpenItem } = this.props
        //лучше эту логику вынести в connect
        const result = filter[0] ? articles.filter((article) => {
            let bool = false
            filter.map((filterItem) => {
                if (filterItem.value === article.id) bool = true
            })
            return bool
        }) : articles

        const articleItems = result.map(article => (
            <li key = {article.id}>
                <Article
                    article = {article}
                    isOpen = {isOpen(article.id)}
                    toggleOpen = {toggleOpenItem(article.id)}
                />
            </li>
        ))

        return (
            <ul ref = {this.getContainerRef}>
                {articleItems}
            </ul>
        )
    }
}

export default connect(state => ({
    articles: state.articles,
    filter: state.filter
}))(accordion(ArticleList))
