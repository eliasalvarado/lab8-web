import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './Timer.module.css'

const Timer = ({ seconds }) => {
  const history = useHistory()
  const [time, setTime] = useState(seconds)

  useEffect(() => {
    let interval = null

    if (time > 0) {
      interval = setInterval(() => {
        setTime((prev) => {
          if (prev === 1) history.push('/lost')

          return prev - 1
        })
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [time])

  const formatTime = () => {
    const minutesLeft = Math.floor(time / 60)
    const secondsLeft = time % 60
    return `${minutesLeft.toString().padStart(2, '0')}:${secondsLeft.toString().padStart(2, '0')}`
  }

  return (
    <div className={`${styles.mainContainer}`}>
      <div className={`${styles.timer}`}>{formatTime(time)}</div>
    </div>
  )
}

export default Timer

Timer.propTypes = {
  seconds: PropTypes.string.isRequired,
}
