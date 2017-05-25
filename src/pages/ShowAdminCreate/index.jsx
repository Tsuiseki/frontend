import React from 'react'
import PropTypes from 'prop-types'
import { push } from 'connected-react-router'
import { connect } from 'react-redux'
import { getCreationState } from 'data/show/selectors'
import { createShow } from 'data/show/actions'
import ShowEdit from 'components/show/ShowEdit'
import styles from './styles.scss'

const ShowAdminCreate = (props) => {
  return (
    <div className={styles.showAdminCreate}>
      <ShowEdit
        onSubmit={(show, image) => props.createShow(show, image)}
        onCancel={props.goBack}
        creationState={props.creationState}
      />
    </div>
  )
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
