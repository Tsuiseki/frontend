import React from 'react'
import { Route } from 'react-router-dom'
import ShowGallery from 'pages/ShowGallery'
import ShowAdmin from 'pages/ShowAdmin'
import styles from './styles.scss'

const App = () => (
  <div className={styles.container}>
    <Route exact path="/" component={ShowGallery} />
    <Route path="/admin" component={ShowAdmin} />
  </div>
)

export default App
