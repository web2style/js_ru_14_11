import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import Select from 'react-select'
import Chart from './Chart'
import DateRange from './DateRange'
import Counter from './Counter'
import 'react-select/dist/react-select.css'
import { connect } from 'react-redux'
import { filterArticles } from '../AC/filter'

class App extends Component {
    static propTypes = {
        filter: PropTypes.array,
        filterArticles: PropTypes.func.isRequired
    }

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <Counter />
                <Chart />
                <DateRange />
                <ArticleList />
                <Select
                    options={options}
                    value={this.props.filter}
                    onChange={this.handleChange}
                    multi={true}
                />
            </div>
        )
    }

    handleChange = selected => this.props.filterArticles(selected)
}

export default connect(state =>
    ({
        articles: state.articles,
        filter: state.filter
    }), { filterArticles })(App)