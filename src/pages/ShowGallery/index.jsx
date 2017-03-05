import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getShows } from 'data/show/selectors'
import { fetchShows, createShow } from 'data/show/actions'
import ShowList from 'components/show/ShowList'
import ShowEdit from 'components/show/ShowEdit'
import styles from './styles.scss'

class ShowGallery extends Component {
  componentDidMount() {
    this.props.fetchShows()
  }

  render() {
    return (
      <div className={styles.showGallery}>
        <ShowList shows={this.props.shows} />
        <ShowEdit onSubmit={(show) => this.props.createShow(show)} />
      </div>
    )
  }
}

ShowGallery.propTypes = {
  shows: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchShows: PropTypes.func.isRequired,
  createShow: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
    shows: getShows(state),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchShows: () => dispatch(fetchShows()),
    createShow: (show) => dispatch(createShow(show)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowGallery)
