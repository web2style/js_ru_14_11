import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import Select from 'react-select'
import Chart from './Chart'
import 'react-select/dist/react-select.css'
import DayPicker, { DateUtils } from "react-day-picker"
import 'react-day-picker/lib/style.css'

class App extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    state = {
        selected: null,
        //надо было промежуток дат
        selectedDay: new Date()
    }

    handleDayClick(e, day, {selected, disabled}) {
        if (disabled) {
            return
        }
        if (selected) {
            this.setState({selectedDay: null})
        } else {
            this.setState({selectedDay: day}, () => console.log(day))
        }
    }

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                {String(this.state.selectedDay)}
                <DayPicker
                    initialMonth={new Date(2016, 1)}
                    selectedDays={day => DateUtils.isSameDay(this.state.selectedDay, day)}
                    onDayClick={this.handleDayClick.bind(this)}
                />
                <Chart />
                <ArticleList articles={this.props.articles} />
                <Select options = {options} value = {this.state.selected} onChange = {this.handleChange} multi = {true}/>
            </div>
        )
    }

    handleChange = selected => this.setState({ selected })
}

export default App
