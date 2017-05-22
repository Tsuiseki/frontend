import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.scss'

const Show = (props) => (
  <div className={styles.show}>
    <div className={styles.showTitle}>
      {props.name}
    </div>
    <div className={styles.showEpisodes}>
      {props.episodes != null ? props.episodes : '?'}
    </div>
    <img className={styles.showImage} src={props.image} />
    <div className={styles.showOptions}>
      {props.children}
    </div>
  </div>
)

Show.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  episodes: PropTypes.number,
  children: PropTypes.element,
}

export default Show
