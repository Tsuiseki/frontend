import React, { PropTypes } from 'react'
import styles from './styles.scss'

const App = (props) => (
  <div className={styles.container}>
    {props.children}
  </div>
)

App.propTypes = {
  children: PropTypes.object.isRequired,
}

export default App
