import React from 'react'
import PropTypes from 'prop-types'
import styles from './MazeComponent.module.css'
import wallImg from '../../assets/wall.svg'
import cornerImg from '../../assets/corner.svg'

function MazeComponent({ gridArea, tipo }) {
  const tipoStyle = {
    wall: wallImg,
    corner: cornerImg,
  }

  return (
    <div className={`${styles.mainContainer}`} style={{ gridArea }}>
      {tipo !== 'un' && <img className={`${styles.imgContainer}`} src={`${tipoStyle[tipo]}`} alt={tipo} />}
    </div>
  )
}

export default MazeComponent

MazeComponent.propTypes = {
  gridArea: PropTypes.string.isRequired,
  tipo: PropTypes.string.isRequired,
}
