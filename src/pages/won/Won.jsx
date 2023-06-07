import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Won.module.css'

function Won() {
  return (
    <div className={`${styles.mainContainer}`}>
      <h1>
        Travesura realizada, o alguien podría leerlo
      </h1>
      <img className={`${styles.imagen}`} src="https://i.pinimg.com/564x/de/5c/aa/de5caa08eef9267db3d587a0ed2517bf.jpg" alt="mapa del merodador" />
      <Link className={`${styles.button}`} to="/">Home</Link>
    </div>
  )
}

export default Won
