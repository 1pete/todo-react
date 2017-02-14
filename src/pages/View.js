import React, { PropTypes } from 'react'

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
