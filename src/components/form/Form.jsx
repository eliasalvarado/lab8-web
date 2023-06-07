import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './Form.module.css'
import Input from '../input/Input'

function Form() {
  const inputs = [
    { type: 'number', text: 'ancho' },
    { type: 'number', text: 'alto' },
  ]
  const personajes = [
    'Harry Potter',
    'Ron Weasley',
    'Hermione Granger',
  ]
  const personajeId = {
    'Harry Potter': 'HP',
    'Ron Weasley': 'RW',
    'Hermione Granger': 'HG',
  }

  const [timer, setTimer] = useState(false)

  const handleChecked = () => {
    setTimer(!timer)
  }

  const validateDimention = ({ target }) => {
    const { value } = target
    if (value < 4 || value > 100) {
      target.setCustomValidity('El rango de dimensión es de 4 a 100')
      return
    }
    target.setCustomValidity('')
  }

  const validateTimer = ({ target }) => {
    const { value } = target
    if (value < 10 || value > 600) {
      target.setCustomValidity('El tiempo mínimo es de 10s y máximo 600s')
      return
    }
    target.setCustomValidity('')
  }

  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    const { target } = e
    history.push({
      pathname: '/maze',
      state: [+target[0].value, +target[1].value, target[2].value, +target[4].value],
    })
  }

  return (
    <form className={`${styles.mainContainer}`} onSubmit={handleSubmit}>
      <div className={`${styles.dimentionsContainer}`}>
        {inputs.map((input) => (
          <Input type={input.type} text={input.text} onChange={validateDimention} />
        ))}
      </div>
      <div className={`${styles.dropdownContainer}`}>
        <select className={`${styles.dropdown}`} required>
          <option className={`${styles.option}`} value="" disabled selected hidden>Seleccione un personaje</option>
          {personajes.map((personaje) => (
            <option className={`${styles.option}`} value={`${personajeId[personaje]}`}>{personaje}</option>
          ))}
        </select>
      </div>
      <div className={`${styles.timerContainer}`}>
        <label htmlFor="timer" className={`${styles.labelTimer}`}>
          <input className={`${styles.checkTimer}`} type="checkbox" onChange={handleChecked} id="timer" />
          Timer
        </label>
        <input className={`${styles.timerInput}`} type="number" onChange={validateTimer} required={timer} placeholder="Segundos" style={{ display: timer ? 'block' : 'none' }} />
      </div>
      <input className={`${styles.button}`} type="submit" value="Iniciar" />
    </form>
  )
}

export default Form
