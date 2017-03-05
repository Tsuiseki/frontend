import React, { PropTypes } from 'react'
import Show from 'components/show/Show'
import styles from './styles.scss'

const ShowList = (props) => (
  <div className={styles.showList}>
    {
      props.shows.map(show => (
        <Show
          name={show.name}
          image={show.image}
          episodes={show.episodes}
          key={show._id}
        >
        {props.showOptions != null && props.showOptions(show._id)}
        </Show>
      ))
    }
  </div>
)

ShowList.propTypes = {
  shows: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    episodes: PropTypes.number,
  })).isRequired,
  showOptions: PropTypes.func,
}

export default ShowList
