import React from 'react'
import styles from './Home.module.css'
import Form from '../../components/form/Form'

function Home() {
  return (
    <div className={`${styles.mainContainer}`}>
      <h1 className={`${styles.title}`}>
        Harry Potter Maze
      </h1>
      <Form />
    </div>
  )
}

export default Home
