import React from 'react'
import PropTypes from 'prop-types'
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
          {renderOptions(props, show)}
        </Show>
      ))
    }
  </div>
)

const renderOptions = (props, show) => {
  if (props.showOptions != null) {
    return props.showOptions(show._id)
  }
}

ShowList.propTypes = {
  shows: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    episodes: PropTypes.number,
  })).isRequired,
  showOptions: PropTypes.func,
}

export default ShowList
