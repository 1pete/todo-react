// @flow

import React from 'react'
import PropTypes from 'prop-types'

import NavBar from '../components/NavBar'
import ViewTodo from '../containers/ViewTodo'

const ViewPage = ({ match: { params } }) => (
  <div>
    <NavBar showBack />
    <ViewTodo itemId={params.id} />
  </div>
)

ViewPage.contextTypes = {
  router: PropTypes.object,
}

ViewPage.propTypes = {
  match: PropTypes.object,
}

ViewPage.defaultProps = {
  match: {},
}

export default ViewPage
