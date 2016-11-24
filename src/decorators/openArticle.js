import React from 'react'

export default (Component) => class WrappedComponent extends React.Component {
    state = {
        openArticleId: null
    }
    openArticle = id => ev => {
        if (id === this.state.openArticleId) {
            this.setState({openArticleId: null})
        } else {
            this.setState({
                openArticleId: id
            })
        }
    }
    render() {
        return <Component
            {...this.props}
            {...this.state}
            openArticleId={this.state.openArticleId}
            openArticle={this.openArticle}
        />
    }
}