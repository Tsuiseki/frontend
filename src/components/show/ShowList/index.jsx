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
          key={show._id}
        />
      ))
    }
  </div>
)

ShowList.propTypes = {
  shows: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  })).isRequired,
}

export default ShowList
