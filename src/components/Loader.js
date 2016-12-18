import React, { PropTypes } from 'react'
import {connect} from 'react-redux'

function Loader(props, context) {
    return (
        <h2>{context.intl.loader[props.intl.language]}</h2>
    )
}

Loader.propTypes = {}

Loader.contextTypes = {
    intl: PropTypes.object
}

const mapStateToProps = (state) => ({
    intl: state.intl
})

export default connect(mapStateToProps)(Loader)