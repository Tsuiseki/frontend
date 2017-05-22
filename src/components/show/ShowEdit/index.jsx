import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.scss'

const ShowEdit = (props) => {
  let nameInput, episodesInput, imageInput

  return (
    <form
      className={styles.showEdit}
      onSubmit={(event) => {
        event.preventDefault()
        props.onSubmit(
          {
            name: nameInput.value,
            episodes: episodesInput.value,
          },
          imageInput.files[0],
        )
      }}
    >
      <div>
        <label>Name: </label>
        <input type="text" ref={node => nameInput = node}/>
      </div>
      <div>
        <label>Image: </label>
      <input type="file" ref={node => imageInput = node}/>
      </div>
      <div>
        <label>Episodes: </label>
        <input type="text" ref={node => episodesInput = node}/>
      </div>
      <button type="submit">
        Create
      </button>
    </form>
  )
}

ShowEdit.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default ShowEdit
