import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import styles from './Maze.module.css'
import Timer from '../../components/timer/Timer'
import MazeGame from '../../components/maze/MazeGame'

function Maze() {
  const { state } = useLocation()
  const [maze, setMaze] = useState(null)
  const getMaze = async () => {
    const response = await fetch(`https://maze.uvgenios.online/?type=json&w=${state[0]}&h=${state[1]}`)
    return response.json()
  }
  const loadMaze = async () => setMaze(await getMaze())

  useEffect(() => {
    loadMaze()
  }, [])

  return (
    <div className={`${styles.mainContainer}`}>
      {!maze && <div>Cargando</div>}
      {maze && <MazeGame w={state[0]} h={state[1]} personajeId={state[2]} maze={maze} />}
      {state[3] > 0 && <Timer seconds={state[3]} />}
    </div>
  )
}

export default Maze
