import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { coalesce } from 'utils'
import styles from './styles.scss'

class ShowEdit extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleEpisodesChange = this.handleEpisodesChange.bind(this)
    this.handleImageChange = this.handleImageChange.bind(this)
  }

  handleNameChange(event) {
    this.props.onChange({ name: event.target.value })
  }

  handleEpisodesChange(event) {
    let episodes = event.target.value != '' ? parseInt(event.target.value) : null

    if (episodes == null || !isNaN(episodes)) {
      this.props.onChange({ episodes })
    }
  }

  handleImageChange(event) {
    this.props.onChange({
      image: {
        value: event.target.value,
        file: event.target.files[0],
      },
    })
  }

  isSaveDisabled() {
    return this.props.isSaving || this.props.show.name === ''
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.onSubmit()
  }

  render() {
    return (
      <form
        className={styles.showEdit}
        onSubmit={(event) => this.handleSubmit(event)}
      >
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={this.props.show.name}
            onChange={this.handleNameChange}
          />
        </div>
        <div>
          <label>Image: </label>
          <input
            type="file"
            value={coalesce(this.props.show.image, '')}
            onChange={this.handleImageChange}
          />
        </div>
        <div>
          <label>Episodes: </label>
          <input
            type="text"
            value={coalesce(this.props.show.episodes, '')}
            onChange={this.handleEpisodesChange}
          />
        </div>
        <button type="submit" disabled={this.isSaveDisabled()}>
          Save
        </button>
        <button
          type="button"
          onClick={() => this.props.onCancel()}
          disabled={this.isSaving}
        >
          Cancel
        </button>
      </form>
    )
  }
}

ShowEdit.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  isSaving: PropTypes.bool.isRequired,
  show: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    episodes: PropTypes.number,
  }).isRequired,
}

export default ShowEdit
