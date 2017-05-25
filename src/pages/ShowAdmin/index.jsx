import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getShows } from 'data/show/selectors'
import { fetchShows, deleteShow } from 'data/show/actions'
import ShowAdminCreate from 'pages/ShowAdminCreate'
import ShowList from 'components/show/ShowList'
import styles from './styles.scss'

class ShowAdmin extends Component {
  constructor() {
    super()
    this.showOptions = this.showOptions.bind(this)
  }

  componentDidMount() {
    this.props.fetchShows()
  }

  showOptions(id) {
    return (
      <button onClick={() => this.props.deleteShow(id)}>
        Delete
      </button>
    )
  }

  render() {
    return (
      <div className={styles.showAdmin}>
        <Route path="/admin/create" component={ShowAdminCreate} />
        <Link to="/admin/create">Create Show</Link>
        <ShowList shows={this.props.shows} showOptions={this.showOptions} />
      </div>
    )
  }
}

ShowAdmin.propTypes = {
  shows: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchShows: PropTypes.func.isRequired,
  deleteShow: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
    shows: getShows(state),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchShows: () => dispatch(fetchShows()),
    deleteShow: (id) => dispatch(deleteShow(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowAdmin)
