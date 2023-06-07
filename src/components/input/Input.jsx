import React from 'react'
import PropTypes from 'prop-types'
import styles from './Input.module.css'

function Input({ type, text, onChange }) {
  return (
    <div className={`${styles.mainContainer}`}>
      <span className={`${styles.spanContainer}`}>
        {text}
      </span>
      <input className={`${styles.inputContainer}`} required type={type} onChange={onChange} />
    </div>
  )
}

export default Input

Input.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
