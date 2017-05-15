import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getShows } from 'data/show/selectors'
import { fetchShows } from 'data/show/actions'
import ShowList from 'components/show/ShowList'
import styles from './styles.scss'

class ShowGallery extends Component {
  componentDidMount() {
    this.props.fetchShows()
  }

  render() {
    return (
      <div className={styles.showGallery}>
        <Link to="/admin">Admin</Link>
        <ShowList shows={this.props.shows} />
      </div>
    )
  }
}

ShowGallery.propTypes = {
  shows: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchShows: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
    shows: getShows(state),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchShows: () => dispatch(fetchShows()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowGallery)
