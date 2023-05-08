import React from 'react'
import PropTypes from 'prop-types'

export default function ButtonKeyboard({ htmlContent, className, handlerEvent }) {
  return (
    <>
      <button className={className} onClick={handlerEvent}>{htmlContent}</button>
    </>
  )
}


ButtonKeyboard.propTypes = {
    htmlContent: PropTypes.string,
    className: PropTypes.string,
}