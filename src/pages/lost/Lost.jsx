import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Lost.module.css'

function Lost() {
  return (
    <div className={`${styles.mainContainer}`}>
      <h1>
        ¿Qué has hecho?
      </h1>
      <img className={`${styles.imagen}`} src="https://i.pinimg.com/564x/0a/54/4e/0a544ebd0a97637e037a60a470f7cf7a.jpg" alt="mapa del merodador" />
      <Link className={`${styles.button}`} to="/">Home</Link>
    </div>
  )
}

export default Lost
