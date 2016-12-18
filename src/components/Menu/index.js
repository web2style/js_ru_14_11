import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'

class Menu extends Component {
    static propTypes = {

    };

    static contextTypes = {
        intl: PropTypes.object
    }

    render() {
        return (
            <div>
                <h3>{this.context.intl.menu[this.props.intl.language]}</h3>
                <section>
                    {this.props.children}
                </section>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    intl: state.intl
})

export default connect(
    mapStateToProps,
    null,
    null,
    {pure: false}
)(Menu)