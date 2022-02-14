import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

const Helmet = props => {
    document.title = 'Fakebook - ' + props.title

    useEffect(() => {
        window.history.scrollRestoration = 'manual'
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);


    return (
        <div>
            {props.children}
        </div>
    )
}

Helmet.propTypes = {
    title: PropTypes.string.isRequired
}

export default Helmet
