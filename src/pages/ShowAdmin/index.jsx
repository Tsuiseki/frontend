import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Link } from 'react-router-dom'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import { getShows } from 'data/show/selectors'
import { fetchShows, deleteShow } from 'data/show/actions'
import ShowAdminCreate from 'pages/ShowAdminCreate'
import ShowAdminEdit from 'pages/ShowAdminEdit'
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
      <div>
        <button onClick={() => this.props.editShow(id)} >
          Edit
        </button>
        <button onClick={() => this.props.deleteShow(id)} >
          Delete
        </button>
      </div>
    )
  }

  render() {
    return (
      <div className={styles.showAdmin}>
        <Switch>
          <Route path="/admin/create" component={ShowAdminCreate} />
          <Route path="/admin/edit/:id" component={ShowAdminEdit} />
        </Switch>
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
  editShow: PropTypes.func.isRequired,
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
    editShow: (id) => dispatch(push(`/admin/edit/${id}`)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowAdmin)
