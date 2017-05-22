import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.scss'
import { CREATION } from 'data/show/states'

class ShowEdit extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.creationState === CREATION.IN_PROGRESS &&
        nextProps.creationState === CREATION.SUCCEEDED) {
      this.cleanInputs()
    }
  }

  cleanInputs() {
    this.nameInput.value = ''
    this.episodesInput.value = ''
    this.imageInput.value = ''
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.onSubmit(
      {
        name: this.nameInput.value,
        episodes: this.episodesInput.value,
      },
      this.imageInput.files[0],
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
          <input type="text" ref={node => this.nameInput = node}/>
        </div>
        <div>
          <label>Image: </label>
        <input type="file" ref={node => this.imageInput = node}/>
        </div>
        <div>
          <label>Episodes: </label>
          <input type="text" ref={node => this.episodesInput = node}/>
        </div>
        <button type="submit" disabled={this.props.creationState === CREATION.IN_PROGRESS}>
          Create
        </button>
      </form>
    )
  }
}

ShowEdit.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  creationState: PropTypes.string.isRequired,
}

export default ShowEdit
