import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getShows } from 'data/shows/selectors'
import { fetchShows } from 'data/shows/actions'
import ShowList from 'components/show/ShowList'
import styles from './styles.scss'

class ShowGallery extends Component {
  componentDidMount() {
    this.props.dispatch(fetchShows())
  }

  render() {
    return (
      <div className={styles.showGallery}>
        <ShowList shows={this.props.shows} />
      </div>
    )
  }
}

ShowGallery.propTypes = {
  shows: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
    shows: getShows(state),
  }
}

export default connect(mapStateToProps)(ShowGallery)
