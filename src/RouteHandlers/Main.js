import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import Menu from '../components/Menu'
import MenuItem from '../components/Menu/MenuItem'
import {DEFAULT_LANGUAGE} from '../constants'
import {changeLanguage} from '../AC/intl'
import {connect} from 'react-redux'

class Main extends Component {
    static propTypes = {
        changeLanguage: PropTypes.func.isRequired
    }

    state = {
        username: '',
        selectedOption: DEFAULT_LANGUAGE
    }

    static childContextTypes = {
        username: PropTypes.string,
        intl: PropTypes.object
    }

    handleOptionChange = ({target: {value}}) => {
        this.setState({
            selectedOption: value
        })
        this.props.changeLanguage(value)
    }

    getChildContext() {
        return {
            username: this.state.username,
            intl: {
                menu: {
                    en: 'Choose menu item',
                    ru: 'Выберите пункт меню' 
                },
                articles: {
                    en: 'Choose your article',
                    ru: 'Выберите статью'
                },
                loader: {
                    en: 'Loading...',
                    ru: 'Загрузка...'
                }
            }
        }
    }

    render() {
        return (            
            <div>
                username: <input value = {this.state.username} onChange={this.handleUserChange}/><br />
                language:<br />
                <label htmlFor="en">en</label>
                <input
                    type="radio"
                    value="en"
                    id="en"
                    name="intl"
                    checked={this.state.selectedOption === 'en'}
                    onChange={this.handleOptionChange}
                />
                <label htmlFor="ru">ru</label>
                <input
                    type="radio"
                    value="ru"
                    id="ru"
                    name="intl"
                    checked={this.state.selectedOption === 'ru'}
                    onChange={this.handleOptionChange}
                />
                <Menu>
                    <MenuItem link = "/articles" name="Articles index"/>
                    <MenuItem link = "/filters" name="Filters"/>
                    <MenuItem link = "/counter" name="Counter"/>
                    <MenuItem link = "/comments/1" name="Comments"/>
                </Menu>
                {this.props.children}
            </div>
        )
    }

    handleUserChange = (ev) => {
        this.setState({
            username: ev.target.value
        })
    }
}

export default connect(
    null,
    {changeLanguage},
)(Main)