import React from 'react'
import PropTypes from 'prop-types'

function Display({ className, values }) {
  return (
    <>
      <div className={className}>
        {values}
      </div>
    </>
  )
}

Display.propTypes = {
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Display