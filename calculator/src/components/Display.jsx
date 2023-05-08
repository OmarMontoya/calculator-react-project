import React from 'react'
import PropTypes from 'prop-types'

function Display({ className, value }) {
  return (
    <>
      <div className={className}>
        {value}
      </div>
    </>
  )
}

Display.propTypes = {
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Display