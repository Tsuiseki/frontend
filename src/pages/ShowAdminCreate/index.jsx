import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { push } from 'connected-react-router'
import { connect } from 'react-redux'
import { getCreationState } from 'data/show/selectors'
import { createShow } from 'data/show/actions'
import { CREATION } from 'data/show/states'
import ShowEdit from 'components/show/ShowEdit'
import styles from './styles.scss'

class ShowAdminCreate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      episodes: null,
      image: {
        value: null,
        file: null,
      },
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.creationState === CREATION.SUCCEEDED) {
      this.setState({
        name: '',
        episodes: null,
        image: {
          value: null,
          file: null,
        },
      })
    }
  }

  handleChange(change) {
    this.setState(change)
  }

  handleSubmit() {
    this.props.createShow(
      {
        name: this.state.name,
        episodes: this.state.episodes,
      },
      this.state.image.file,
    )
  }

  render() {
    return (
      <div className={styles.showAdminCreate}>
        <ShowEdit
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          onCancel={this.props.goBack}
          isSaving={this.props.creationState === CREATION.IN_PROGRESS}
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

ShowAdminCreate.propTypes = {
  creationState: PropTypes.string.isRequired,
  createShow: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
    creationState: getCreationState(state),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createShow: (show, image) => dispatch(createShow(show, image)),
    goBack: () => dispatch(push('/admin')),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowAdminCreate)
