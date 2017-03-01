import React, { PropTypes } from 'react'
import styles from './styles.scss'

const Show = (props) => (
  <div className={styles.show}>
    <div className={styles.showTitle}>
      {props.name}
    </div>
    <img className={styles.showImage} src={props.image} />
  </div>
)

Show.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default Show
