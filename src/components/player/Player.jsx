import React from 'react'
import PropTypes from 'prop-types'
import styles from './Player.module.css'

function Player({
  src, gridArea, x, y,
}) {
  return (
    <div className={`${styles.mainContainer}`} style={{ background: `url(${src}) no-repeat`, gridArea, backgroundPosition: `-${x}px -${y}px` }} />
  )
}

export default Player

Player.propTypes = {
  src: PropTypes.string.isRequired,
  gridArea: PropTypes.string.isRequired,
  x: PropTypes.string.isRequired,
  y: PropTypes.string.isRequired,
}
