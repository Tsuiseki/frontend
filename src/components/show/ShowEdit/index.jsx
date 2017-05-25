import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.scss'
import { CREATION } from 'data/show/states'

class ShowEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      episodes: '',
      image: '',
      imageFile: null,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleEpisodesChange = this.handleEpisodesChange.bind(this)
    this.handleImageChange = this.handleImageChange.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.creationState === CREATION.IN_PROGRESS &&
        nextProps.creationState === CREATION.SUCCEEDED) {
      this.cleanInputs()
    }
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value })
  }

  handleEpisodesChange(event) {
    this.setState({ episodes: event.target.value })
  }

  handleImageChange(event) {
    this.setState({
      image: event.target.value,
      imageFile: event.target.files[0],
    })
  }

  isSaveDisabled() {
    return this.props.creationState === CREATION.IN_PROGRESS || this.state.name === ''
  }

  cleanInputs() {
    this.setState({
      name: '',
      episodes: '',
      image: '',
      imageFile: null,
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.onSubmit(
      {
        name: this.state.name,
        episodes: this.state.episodes,
      },
      this.state.imageFile,
    )
  }

  render() {
    return (
      <form
        className={styles.showEdit}
        onSubmit={(event) => this.handleSubmit(event)}
      >
        <div>
          <label>Name: </label>
          <input type="text" value={this.state.name} onChange={this.handleNameChange} />
        </div>
        <div>
          <label>Image: </label>
          <input type="file" value={this.state.image} onChange={this.handleImageChange} />
        </div>
        <div>
          <label>Episodes: </label>
          <input type="text" value={this.state.episodes} onChange={this.handleEpisodesChange} />
        </div>
        <button type="submit" disabled={this.isSaveDisabled()}>
          Save
        </button>
        <button
          type="button"
          onClick={() => this.props.onCancel()}
          disabled={this.props.creationState === CREATION.IN_PROGRESS}
        >
          Cancel
        </button>
      </form>
    )
  }
}

ShowEdit.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  creationState: PropTypes.string.isRequired,
}

export default ShowEdit
