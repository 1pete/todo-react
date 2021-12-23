import React from 'react'
import { withRouter } from 'react-router-dom'

import type { Match } from 'react-router-dom'

import NavBar from '../components/NavBar'
import ViewTodo from '../containers/ViewTodo'

type Props = {
  match: Match,
}

const ViewPage = function ViewPage({ match: { params } }: Props) {
  return (
    <div>
      <NavBar showBack />
      <ViewTodo itemId={params.id} />
    </div>
  )
}

export default withRouter(ViewPage)
