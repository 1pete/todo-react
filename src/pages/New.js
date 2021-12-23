// @flow

import React from 'react'

import NavBar from '../components/NavBar'
import NewTodo from '../containers/NewTodo'

const NewPage = function NewPage() {
  return (
    <div>
      <NavBar showBack />
      <NewTodo />
    </div>
  )
}

export default NewPage
