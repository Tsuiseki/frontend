import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import { getShow, getEditState } from 'data/show/selectors'
import { editShow } from 'data/show/actions'
import { EDIT } from 'data/show/states'
import ShowEdit from 'components/show/ShowEdit'
import styles from './styles.scss'

class ShowAdminEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.show != null ? props.show.name : '',
      episodes: props.show != null ? props.show.episodes : null,
      image: {
        value: null,
        file: null,
      },
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.editState === EDIT.SUCCEEDED) {
      this.props.goBack()
    }

    if (nextProps.show !== this.props.show) {
      if (nextProps.show == null) {
        this.props.goBack()
      } else {
        this.setState({
          name: nextProps.show.name,
          episodes: nextProps.show.episodes,
        })
      }
    }
  }

  handleChange(change) {
    this.setState(change)
  }

  handleSubmit() {
    this.props.editShow(
      this.props.show._id,
      {
        name: this.state.name,
        episodes: this.state.episodes,
      },
      this.state.image.file,
    )
  }

  render() {
    return (
      <div className={styles.showAdminEdit}>
        <ShowEdit
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          onCancel={this.props.goBack}
          isSaving={this.props.editState === EDIT.IN_PROGRESS}
          show={{
            name: this.state.name,
            image: this.state.image.value,
            episodes: this.state.episodes,
          }}
        />
      </div>
    )
  }
}

ShowAdminEdit.propTypes = {
  show: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    episodes: PropTypes.number,
  }),
  editState: PropTypes.string.isRequired,
  editShow: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
}

function mapStateToProps(state, { match }) {
  return {
    editState: getEditState(state),
    show: getShow(state, match.params.id),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    editShow: (id, show, image) => dispatch(editShow(id, show, image)),
    goBack: () => dispatch(push('/admin')),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowAdminEdit)
