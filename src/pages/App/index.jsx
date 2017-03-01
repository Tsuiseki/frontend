import React from 'react'
import { Route } from 'react-router-dom'
import ShowGallery from 'pages/ShowGallery'
import styles from './styles.scss'

const App = () => (
  <div className={styles.container}>
    <Route path="/" component={ShowGallery} />
  </div>
)

export default App
