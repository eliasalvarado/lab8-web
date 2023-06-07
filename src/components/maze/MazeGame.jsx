/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './MazeGame.module.css'
import metaHP from '../../assets/meta.svg'
import metaRW from '../../assets/metaRon.svg'
import metaHG from '../../assets/metaHerm.svg'
import hpImg from '../../assets/harry.png'
import rwImg from '../../assets/ron.png'
import hgImg from '../../assets/herm.png'
import MazeComponent from '../mazeComponent/MazeComponent'
import Player from '../player/Player'

const meta = {
  HP: metaHP,
  RW: metaRW,
  HG: metaHG,
}
const personaje = {
  HP: hpImg,
  RW: rwImg,
  HG: hgImg,
}

const MazeGame = ({
  w, h, personajeId, maze,
}) => {
  const history = useHistory()
  const autoFocus = useCallback((el) => (el ? el.focus() : null), [])
  const columns = w * 3 + 1
  const rows = h * 2 + 1
  const availableSpaces = []
  const metaGrid = []
  const [personajePos, setPersonajepos] = useState({ x: 2, y: 2 })
  const [personajeSprite, setpersonajeSprite] = useState({ x: 0, y: 0 })

  const handleKeyDown = ({ key }) => {
    switch (key) {
      case 'ArrowDown':
        if (availableSpaces.includes(`${personajePos.y + 1} / ${personajePos.x}`)) {
          setPersonajepos((prev) => ({ x: prev.x, y: prev.y + 1 }))
        }
        setpersonajeSprite({ x: '64', y: '0' })
        break
      case 'ArrowUp':
        if (availableSpaces.includes(`${personajePos.y - 1} / ${personajePos.x}`)) {
          setPersonajepos((prev) => ({ x: prev.x, y: prev.y - 1 }))
        }
        setpersonajeSprite({ x: '64', y: '144' })
        break
      case 'ArrowLeft':
        if (availableSpaces.includes(`${personajePos.y} / ${personajePos.x - 1}`)) {
          setPersonajepos((prev) => ({ x: prev.x - 1, y: prev.y }))
        }
        setpersonajeSprite({ x: '32', y: '48' })
        break
      case 'ArrowRight':
        if (availableSpaces.includes(`${personajePos.y} / ${personajePos.x + 1}`)) {
          setPersonajepos((prev) => ({ x: prev.x + 1, y: prev.y }))
        }
        setpersonajeSprite({ x: '64', y: '96' })
        break
      default:
        break
    }
  }

  useEffect(() => {
    if (`${personajePos.y} / ${personajePos.x}` === metaGrid[0]) history.push('/won')
  }, [personajePos])

  return (
    <div
      className={`${styles.mainContainer}`}
      style={{
        gridTemplateColumns: `repeat(${columns}, ${90 / columns}vw)`,
        gridTemplateRows: `repeat(${rows}, ${90 / rows}vh)`,
      }}
      onKeyDown={handleKeyDown}
      ref={autoFocus}
      tabIndex={0}
    >
      {
        maze.map((row, rIndex) => row.map((col, cIndex) => {
          switch (col) {
            case 'p':
              availableSpaces.push(`${rIndex + 1} / ${cIndex + 1}`)
              return (
                <Player src={personaje[personajeId]} gridArea={`${personajePos.y} / ${personajePos.x}`} x={personajeSprite.x} y={personajeSprite.y} />
              )
            case 'g':
              availableSpaces.push(`${rIndex + 1} / ${cIndex + 1}`)
              metaGrid.push(`${rIndex + 1} / ${cIndex + 1}`)
              return <img className={`${styles.meta}`} src={meta[personajeId]} alt="meta" style={{ gridArea: `${rIndex + 1} / ${cIndex + 1}` }} />
            case '+':
              return <MazeComponent gridArea={`${rIndex + 1} / ${cIndex + 1}`} tipo="corner" />
            case '|':
              return <MazeComponent gridArea={`${rIndex + 1} / ${cIndex + 1}`} tipo="wall" />
            case '-':
              return <MazeComponent gridArea={`${rIndex + 1} / ${cIndex + 1}`} tipo="wall" />
            case ' ':
              availableSpaces.push(`${rIndex + 1} / ${cIndex + 1}`)
              return <MazeComponent gridArea={`${rIndex + 1} / ${cIndex + 1}`} tipo="un" />
            default:
              return <div>hola</div>
          }
        }))
      }
    </div>
  )
}

export default MazeGame

MazeGame.defaultProps = {
  personajeId: 'HP',
}

MazeGame.propTypes = {
  w: PropTypes.string.isRequired,
  h: PropTypes.string.isRequired,
  personajeId: PropTypes.string,
  maze: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
}
